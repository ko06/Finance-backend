from rest_framework import generics, permissions, views, status
from django.contrib.auth.models import User
from .models import Branch, Caste, Center, Member, Relationship, Religion, Role
from .serializers import (
    MemberSerializer,
    RolesSerializer,
    BranchSerializer,
    CasteSerializer,
    CenterSerializer,
    ReligionSerializer,
    RelationshipSerializer,
)
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
import datetime

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


class CenterList(generics.ListCreateAPIView):
    model = Center
    serializer_class = CenterSerializer
    pagination_class = ListPagination
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        queryset = Center.objects.filter(branch=self.kwargs.get("id"))
        return queryset

    def post(self, request, *args, **kwargs):
        try:
            center = Center.objects.create(
                user=User.objects.get(id=request.data["staff_id"]),
                branch=Branch.objects.get(id=self.kwargs.get("id")),
                name=request.data["name"],
                description=request.data["description"],
                dayOrder=request.data["dayOrder"],
                time = request.data["time"]
            )
            center.save()
            return Response(request.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response(e, status=status.HTTP_206_PARTIAL_CONTENT)

class MemberList(generics.ListCreateAPIView):
    model = Member
    serializer_class = MemberSerializer
    pagination_class = ListPagination
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        queryset = Member.objects.get(centerId=self.kwargs.get("id"))
        return queryset

    def post(self, request, *args, **kwargs):
        try:
            member = Member.objects.create(
                centerId=Center.objects.get(id=self.kwargs.get("id")),
                name=request.data["name"],
                tamilName=request.data["tamil_name"],
                dob=datetime.datetime.now(),
                suretyAge=request.data["surety_dob"],
                fatherName=request.data["f_name"],
                motherName=request.data["m_name"],
                religion=request.data["religion"],
                occupation=request.data["occupation"],
                suretyAadhar=request.data["surety_aadhaar_no"],
                suretyName=request.data["surety_name"],
                suretyRelation=request.data["relationship"],
                yearsOfService=request.data["years_service"],
                yearsOfHouse=request.data["years_of_house"],
                martialDetails=request.data["marital_status"],
                education=request.data["education"],
                houseDetails=request.data["house"],
                childrenCount=request.data["no_of_children"],
                adultCount=request.data["no_of_adults"],
                address=request.data["address"],
                monthlyIncome=request.data["monthly_income"],
                disabledPerson = False if request.data["disabled_person"] == 'true' else True
            )
            member.save()
            return Response(request.data, status=status.HTTP_200_OK)
        except Exception as e:
            print (e)
            return Response(e, status=status.HTTP_206_PARTIAL_CONTENT)



class RoleList(generics.ListAPIView):
    model = Role
    serializer_class = RolesSerializer
    pagination_class = ListPagination

    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        queryset = Role.objects.filter(branchId=self.kwargs.get("id"))
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
