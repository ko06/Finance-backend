from django.shortcuts import render
from django.http import HttpResponse
from .models import Caste

# Create your views here.
def castes(request):
    return HttpResponse("Hello world!")