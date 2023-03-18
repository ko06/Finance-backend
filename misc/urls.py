from django.urls import path
from django.urls.conf import re_path

from . import views
from .resources import (
    BranchList,
    CasteList,
    CenterList,
    MemberList,
    RelationshipList,
    ReligionList,
    RoleList,
)

urlpatterns = [
    path("caste/", CasteList.as_view(), name="get-castes"),
    path("religion/", ReligionList.as_view(), name="get-religion"),
    path("relation/", RelationshipList.as_view(), name="get-relation"),
    re_path(r"^branch/all/$", BranchList.as_view(), name="get-branches"),
    re_path(r"^branch/(?P<id>\w+)/$", CenterList.as_view(), name="get-centers"),
    re_path(r"^member/(?P<id>\w+)/$", MemberList.as_view(), name="get-members"),
    re_path(r"^roles/(?P<id>\w+)/$", RoleList.as_view(), name="get-roles"),
]
