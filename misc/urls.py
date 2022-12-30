from django.urls import path
from . import views
from .resources import CasteList,RelationshipList,ReligionList

urlpatterns = [
    path("caste/", CasteList.as_view(), name="get-castes"),
    path("religion/", ReligionList.as_view(), name="get-religion"),
    path("relation/", RelationshipList.as_view(), name="get-relation"),
]
