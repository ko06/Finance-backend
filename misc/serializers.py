from rest_framework import serializers, generics
from .models import Branch, Caste, Center, Relationship, Religion, Role
from django.contrib.auth.models import User


class RelationshipSerializer(serializers.ModelSerializer):
    class Meta:
        model = Relationship
        fields = (
            "name",
            "description",
        )


class CasteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Caste
        fields = (
            "name",
            "description",
        )


class ReligionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Religion
        fields = (
            "name",
            "description",
        )

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            "username",
            "id",
            "first_name"
        )
class BranchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Branch
        fields = (
            "name",
            "shortName",
            "id"
        )


class RolesSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Role
        fields = (
            "user",
            "id"
        )
class CenterSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Center
        fields = (
            "name","id","image","user","time","shortName"
        )
        