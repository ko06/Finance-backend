from django.contrib import admin
from misc.models import (
    Caste,
    Religion,
    Relationship
)

# Register your models here.
class CasteAdmin(admin.ModelAdmin):
    list_display = ("__str__", "name")
    search_fields = ("name",)

class ReligionAdmin(admin.ModelAdmin):
    list_display = ("__str__", "name")
    search_fields = ("name",)

class RelationshipAdmin(admin.ModelAdmin):
    list_display = ("__str__", "name")
    search_fields = ("name",)

admin.site.register(Caste, CasteAdmin)
admin.site.register(Religion, ReligionAdmin)
admin.site.register(Relationship, RelationshipAdmin)
