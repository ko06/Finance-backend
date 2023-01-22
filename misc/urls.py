from django.urls import path
from django.urls.conf import re_path

from . import views
from .resources import BranchList, CasteList, CenterList,RelationshipList,ReligionList

urlpatterns = [
    path("caste/", CasteList.as_view(), name="get-castes"),
    path("religion/", ReligionList.as_view(), name="get-religion"),
    path("relation/", RelationshipList.as_view(), name="get-relation"),
    re_path(r"^branch/(?P<id>\w+)/$", CenterList.as_view(), name="get-centers"),
    re_path(r"^branch/$", BranchList.as_view(), name="get-branches"),
]
