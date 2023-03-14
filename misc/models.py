from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.models import User

# Create your models here.

BLOOD_TYPE = (
    ("ab+", "AB+"),
    ("ab-", "AB-"),
    ("a+", "A+"),
    ("a-", "A-"),
    ("b+", "B+"),
    ("b-", "B-"),
    ("o+", "O+"),
    ("o-", "O-"),
)

OBJECT_TYPE = (
    ("AD", "Admin"),
    ("BM", "Branch Manager"),
    ("ST", "Staff"),
)

RELIGION_TYPE = (
    ("hindu", "HINDU"),
    ("christian", "CHRISTIAN"),
    ("muslim", "MUSLIM"),
    ("others", "OTHERS"),
)

HOUSE_TYPE = (
    ("own", "Own House"),
    ("rent", "Rent House"),
    ("lease", "Lease House"),
)

EDUCATION_TYPE = (
    ("8-grade", "8 Grade"),
    ("10-grade", "10 Grade"),
    ("12-grade", "12 Grade"),
    ("UG", "Under Graduate"),
    ("PD", "Post Graduate"),
    ("others", "Others"),
    ("diploma", "Diploma"),
)

MARTIAL_TYPE = (
    ("married", "Married"),
    ("unmarried", "UnMarried"),
    ("widow", "Widow"),
)

OCCUPATION_TYPE = (
    ("agriculture", "Agriculture"),
    ("tailor", "Tailor"),
    ("wages", "Wages"),
    ("driver", "Driver"),
    ("salaried", "Salaried"),
)

DAYS_TYPE = (
    ("monday", "Monday"),
    ("tuesday", "Tuesday"),
    ("wednesday", "Wednesday"),
    ("thursday", "Thursday"),
    ("friday", "Friday"),
)


class TimeStampMixin(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Caste(TimeStampMixin):
    name = models.CharField(max_length=10)
    description = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return self.name


class Religion(TimeStampMixin):
    name = models.CharField(max_length=10)
    description = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return self.name


class Relationship(TimeStampMixin):
    name = models.CharField(max_length=10)
    description = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return self.name


class Branch(TimeStampMixin):
    name = models.CharField(max_length=255, blank=False, null=False)
    shortName = models.CharField(max_length=255, blank=False, null=False)
    status = models.SmallIntegerField()
    createdBy = models.ForeignKey(
        User,
        related_name="branch_created_user",
        editable=False,
        null=True,
        blank=True,
        on_delete=models.CASCADE,
    )
    updatedBy = models.ForeignKey(
        User,
        related_name="branch_updated_user",
        editable=False,
        null=True,
        blank=True,
        on_delete=models.CASCADE,
    )

    def save(self, *args, **kwargs):
        self.status = 1
        super(Branch, self).save(*args, **kwargs)

    def __str__(self):
        return self.name

class Role(TimeStampMixin):
    userId = models.ForeignKey(User, on_delete=models.CASCADE)
    role = models.CharField(max_length=5, choices=OBJECT_TYPE)
    blood_type = models.CharField(max_length=5, choices=BLOOD_TYPE)
    mobile = models.CharField(max_length=127, blank=False, null=False)
    branchId = models.ForeignKey(Branch, on_delete=models.CASCADE)
    status = models.SmallIntegerField(default=1)
    updatedBy = models.ForeignKey(
        User,
        related_name="role_updated_user",
        editable=False,
        null=True,
        blank=True,
        on_delete=models.CASCADE,
    )
    createdBy = models.ForeignKey(
        User,
        related_name="role_created_user",
        editable=False,
        null=True,
        blank=True,
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return self.userId.email + "(" + self.role + ")"


class Center(TimeStampMixin):
    name = models.CharField(max_length=255, blank=False, null=False)
    tamilName = models.CharField(max_length=255, blank=False, null=False)
    shortName = models.CharField(max_length=200, blank=False)
    description = models.CharField(max_length=1023, blank=True, null=True)
    image = models.ImageField(upload_to="%Y/%m/%d/")
    branch = models.ForeignKey(Branch, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    status = models.SmallIntegerField(default=1)
    dayOrder = models.CharField(max_length=50, choices=DAYS_TYPE)
    time = models.TimeField(auto_now=False, auto_now_add=False)
    updatedBy = models.ForeignKey(
        User,
        related_name="center_updated_user",
        editable=False,
        null=True,
        blank=True,
        on_delete=models.CASCADE,
    )
    createdBy = models.ForeignKey(
        User,
        related_name="center_created_user",
        editable=False,
        null=True,
        blank=True,
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        last_autonum = Center.objects.filter(branch__id=self.branch.id).order_by("-id")
        # Use this if just to add the first record, then use just last_autonum=last_autonum[0].autonum

        if last_autonum.count():
            last_autonum = last_autonum[0].id
        else:
            last_autonum = 0
        self.shortName = (
            Branch.objects.get(id=self.branch.id).shortName
            + "-"
            + str(last_autonum + 1)
        )
        super(Center, self).save(*args, **kwargs)


class Member(TimeStampMixin):
    name = models.CharField(max_length=255, blank=False, null=False)
    tamilName = models.CharField(max_length=255, blank=False, null=False)
    dob = models.DateTimeField(blank=False, null=False)
    age = models.CharField(max_length=1023, blank=True, null=True)
    email = models.CharField(max_length=1023, blank=True, null=True)
    aadhar = models.CharField(max_length=1023, blank=False, null=False, unique=True)
    fatherName = models.CharField(max_length=255, blank=False, null=False)
    motherName = models.CharField(max_length=255, blank=False, null=False)
    disabledPerson = models.BooleanField(default=False)
    suretyName = models.CharField(max_length=255, blank=False, null=False)
    suretyAge = models.CharField(max_length=1023, blank=True, null=True)
    suretyRelation = models.ForeignKey(Relationship, on_delete=models.CASCADE)
    suretyAadhar = models.CharField(max_length=1023, blank=True, null=True, unique=True)
    suretyMobile = models.CharField(max_length=1023, blank=True, null=True, unique=True)
    occupation = models.CharField(max_length=200, choices=OCCUPATION_TYPE)
    monthlyIncome = models.PositiveIntegerField(default=0)
    education = models.CharField(max_length=200, choices=EDUCATION_TYPE)
    religion = models.CharField(max_length=200, choices=RELIGION_TYPE)
    martialDetails = models.CharField(max_length=200, choices=MARTIAL_TYPE)
    houseDetails = models.CharField(max_length=200, choices=HOUSE_TYPE)
    yearsOfHouse = models.PositiveIntegerField()
    adultCount = models.PositiveIntegerField(default=0)
    childrenCount = models.PositiveIntegerField(default=0)
    mobile = models.CharField(max_length=1023, blank=True, null=True)
    panNo = models.CharField(max_length=1023, blank=True, null=True)
    centerId = models.ForeignKey(Center, on_delete=models.CASCADE)
    status = models.SmallIntegerField(default=1)
    updatedBy = models.ForeignKey(
        User,
        editable=False,
        related_name="member_updated_user",
        null=True,
        blank=True,
        on_delete=models.CASCADE,
    )
    deletedBy = models.ForeignKey(User, on_delete=models.CASCADE)
    createdBy = models.ForeignKey(
        User,
        related_name="member_created_user",
        editable=False,
        null=True,
        blank=True,
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return self.name
