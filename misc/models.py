from django.db import models

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