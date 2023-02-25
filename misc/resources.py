from rest_framework import generics, permissions, views, status
from .models import Branch, Caste, Center, Relationship, Religion,Role
from .serializers import RolesSerializer, BranchSerializer, CasteSerializer, CenterSerializer, ReligionSerializer, RelationshipSerializer
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import IsAuthenticated

from knox.auth import TokenAuthentication

class ListPagination(PageNumberPagination):
    page_size = 20

class CasteList(generics.ListAPIView):
    model = Caste
    serializer_class = CasteSerializer
    pagination_class = ListPagination

    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        settings_obj = Caste.objects.all()

        return settings_obj


class ReligionList(generics.ListAPIView):
    model = Religion
    serializer_class = ReligionSerializer
    pagination_class = ListPagination

    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        settings_obj = Religion.objects.all()

        return settings_obj


class RelationshipList(generics.ListAPIView):
    model = Relationship
    serializer_class = RelationshipSerializer
    pagination_class = ListPagination

    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        settings_obj = Relationship.objects.all()
        return settings_obj


class CenterList(generics.ListAPIView):
    model = Center
    serializer_class = CenterSerializer
    pagination_class = ListPagination

    permission_classes = [permissions.AllowAny]
    
    def get_queryset(self):
        queryset = Center.objects.filter(branch=self.kwargs.get("id"))
        return queryset

class RoleList(generics.ListAPIView):
    model = Role
    serializer_class = RolesSerializer
    pagination_class = ListPagination

    permission_classes = [permissions.AllowAny]
    
    def get_queryset(self):
        queryset = Center.objects.filter(branch=self.kwargs.get("id"))
        return queryset
class BranchList(generics.ListAPIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)
    model = Branch
    serializer_class = BranchSerializer
    pagination_class = ListPagination
    
    def get_queryset(self):
        queryset = Branch.objects.all()
        return queryset
        