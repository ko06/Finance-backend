from rest_framework import generics, permissions, views, status
from .models import Caste, Relationship, Religion
from .serializers import CasteSerializer, ReligionSerializer, RelationshipSerializer
from rest_framework.pagination import PageNumberPagination

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