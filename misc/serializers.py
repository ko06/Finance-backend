from rest_framework import serializers
from .models import Caste, Relationship, Religion


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
