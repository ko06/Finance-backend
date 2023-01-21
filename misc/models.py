from django.db import models
from django.contrib.auth.models import User
from enum import Enum

# Create your models here.

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

class RolesChoice(Enum):   
    # A subclass of Enum   
    AD = "Admin"    
    BM = "Branch Manager"    
    ST = "Staff"    
    
class Role(models.Model):
    userId = models.ForeignKey(User, on_delete=models.CASCADE)
    role = models.CharField(max_length=5,choices=[(tag, tag.value) for tag in RolesChoice])
    mobile = models.CharField(max_length=127, blank=False, null=False)
    branchId = models.ForeignKey(Branch, on_delete=models.CASCADE)
    status = models.SmallIntegerField()
    addedOn = models.TimeField(auto_now_add=True)
    addedBy = models.BigIntegerField()
    updatedOn = models.TimeField(auto_now=True)
    updatedBy = models.BigIntegerField()
    deletedOn = models.TimeField(auto_now=True)
    deletedBy = models.BigIntegerField()

class Center(models.Model):
    name = models.CharField(max_length=255, blank=False, null=False)
    description = models.CharField(max_length=1023, blank=True, null=True)
    image = models.ImageField(upload_to="featured_image/%Y/%m/%d/")
    branchId = models.ForeignKey(Branch, on_delete=models.CASCADE)
    userId = models.ForeignKey(User, on_delete=models.CASCADE)
    status = models.SmallIntegerField()
    addedOn = models.TimeField(auto_now_add=True)
    addedBy = models.BigIntegerField()
    updatedOn = models.TimeField(auto_now=True)
    updatedBy = models.BigIntegerField()
    deletedOn = models.TimeField(auto_now=True)
    deletedBy = models.BigIntegerField()

class Member(models.Model):
    name = models.CharField(max_length=255, blank=False, null=False)
    dob = models.TimeField(blank=False, null=False)
    email = models.CharField(max_length=1023, blank=True, null=True)
    mobile = models.CharField(max_length=1023, blank=True, null=True)
    aadhar = models.CharField(max_length=1023, blank=False, null=False, unique=True)
    panNo = models.CharField(max_length=1023, blank=True, null=True)
    witnessAadhar = models.CharField(max_length=1023, blank=True, null=True, unique=True)
    witnessMobile = models.CharField(max_length=1023, blank=True, null=True, unique=True)
    centerId = models.ForeignKey(Center, on_delete=models.CASCADE)
    status = models.SmallIntegerField()
    addedOn = models.TimeField(auto_now_add=True)
    addedBy = models.BigIntegerField()
    updatedOn = models.TimeField(auto_now=True)
    updatedBy = models.BigIntegerField()
    deletedOn = models.TimeField(auto_now=True)
    deletedBy = models.BigIntegerField()