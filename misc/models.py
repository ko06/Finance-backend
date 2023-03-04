from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.models import User
# Create your models here.

BLOOD_TYPE = (
    (
        ('ab+', 'AB+'),
        ('ab-', 'AB-'),
        ('a+', 'A+'),
        ('a-', 'A-'),
        ('b+', 'B+'),
        ('b-', 'B-'),
        ('o+', 'O+'),
        ('o-', 'O-'),
        )

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
    ("own","Own House"),
    ("rent", "Rent House"),
    ("lease", "Lease House"),
)

EDUCATION_TYPE = (
    ("8-grade","8 Grade"),
    ("10-grade","10 Grade"),
    ("12-grade","12 Grade"),
    ("UG","Under Graduate"),
    ("PD","Post Graduate"),
    ("others","Others"),
    ("diploma","Diploma"),
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

class Caste(models.Model):
  name = models.CharField(max_length=10)
  description  = models.CharField(max_length=255, blank=True, null=True)
  class Meta:
      ordering = ["name"]

  def __str__(self):
      return self.name

class Religion(models.Model):
  name = models.CharField(max_length=10)
  description  = models.CharField(max_length=255, blank=True, null=True)
  class Meta:
      ordering = ["name"]

  def __str__(self):
      return self.name

class Relationship(models.Model):
  name = models.CharField(max_length=10)
  description  = models.CharField(max_length=255, blank=True, null=True)
  class Meta:
      ordering = ["name"]

  def __str__(self):
      return self.name

class Branch(models.Model):
    name = models.CharField(max_length=255, blank=False, null=False)
    status = models.SmallIntegerField()
    addedOn = models.TimeField(auto_now_add=True)
    addedBy = models.BigIntegerField()
    updatedOn = models.TimeField(auto_now=True)
    updatedBy = models.BigIntegerField()
    deletedOn = models.TimeField(auto_now=True)
    deletedBy = models.BigIntegerField()
    
    def __str__(self):
      return self.name
    
class Role(models.Model):
    userId = models.ForeignKey(User, on_delete=models.CASCADE)
    role = models.CharField(max_length=5,choices=OBJECT_TYPE)
    blood_type = models.CharField(max_length=5,choices=BLOOD_TYPE)
    mobile = models.CharField(max_length=127, blank=False, null=False)
    branchId = models.ForeignKey(Branch, on_delete=models.CASCADE)
    status = models.SmallIntegerField(default=1)
    addedOn = models.DateTimeField(auto_now_add=True)
    addedBy = models.BigIntegerField(blank=True,
        null=True)
    updatedOn = models.DateTimeField(auto_now=True)
    updatedBy = models.BigIntegerField(blank=True,
        null=True)
    deletedOn = models.TimeField(auto_now=True)
    deletedBy = models.BigIntegerField(blank=True,
        null=True)
    
    def __str__(self):
      return self.role

class Center(models.Model):
    name = models.CharField(max_length=255, blank=False, null=False)
    description = models.CharField(max_length=1023, blank=True, null=True)
    image = models.ImageField(upload_to="%Y/%m/%d/")
    branch = models.ForeignKey(Branch, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    status = models.SmallIntegerField(default=1)
    dayOrder = models.CharField(max_length=50,choices=DAYS_TYPE)
    time =  models.TimeField(auto_now=False, auto_now_add=False)
    addedOn = models.DateTimeField(auto_now_add=True,blank=True,
        null=True)
    addedBy = models.DateTimeField("Initial added Date", blank=True, null=True, editable=False)
    updatedOn = models.DateTimeField(auto_now=True)
    updatedBy = models.BigIntegerField(blank=True,
        null=True)
    deletedOn = models.DateTimeField(auto_now=True)
    deletedBy = models.BigIntegerField(blank=True,
        null=True)

    def __str__(self):
      return self.name


class Member(models.Model):
    name = models.CharField(max_length=255, blank=False, null=False)
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
    occupation = models.CharField(max_length=200,choices=OCCUPATION_TYPE)
    monthlyIncome = models.PositiveIntegerField(default=0)
    education = models.CharField(max_length=200,choices=EDUCATION_TYPE)
    religion = models.CharField(max_length=200,choices=RELIGION_TYPE)
    martialDetails = models.CharField(max_length=200,choices=MARTIAL_TYPE)
    houseDetails = models.CharField(max_length=200,choices=HOUSE_TYPE)
    yearsOfHouse = models.PositiveIntegerField()
    adultCount = models.PositiveIntegerField(default=0)
    childrenCount = models.PositiveIntegerField(default=0)
    mobile = models.CharField(max_length=1023, blank=True, null=True)
    panNo = models.CharField(max_length=1023, blank=True, null=True)
    centerId = models.ForeignKey(Center, on_delete=models.CASCADE)
    status = models.SmallIntegerField(default=1)
    addedOn = models.TimeField(auto_now_add=True)
    addedBy = models.BigIntegerField(blank=True,
        null=True)
    updatedOn = models.TimeField(auto_now=True)
    updatedBy = models.BigIntegerField(blank=True,
        null=True)
    deletedOn = models.DateTimeField(auto_now=True,blank=True,
        null=True)
    deletedBy = models.BigIntegerField(blank=True,
        null=True)

    def __str__(self):
      return self.name