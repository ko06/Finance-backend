from django.urls import path
from . import views

urlpatterns = [
    path('castes/', views.castes, name='castes'),
]
