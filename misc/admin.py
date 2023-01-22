from django.contrib import admin
from misc.models import (
    Caste,
    Member,
    Religion,
    Relationship,
    Branch,
    Role,
    Center,
)

# Register your models here.

class BranchAdmin(admin.ModelAdmin):
    class Meta:
        model = Branch
        labels = {
            "AddedBy": "Event Date Time (EST) ",
        }

class CenterAdmin(admin.ModelAdmin):
    raw_id_fields = ("user","branch")
    class Meta:
        model = Center

class RoleAdmin(admin.ModelAdmin):
    raw_id_fields = ("userId","branchId")
    class Meta:
        model = Role
class MemberAdmin(admin.ModelAdmin):
    raw_id_fields = ("centerId","suretyRelation")
    class Meta:
        model = Member

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
admin.site.register(Branch, BranchAdmin)
admin.site.register(Role, RoleAdmin)
admin.site.register(Center, CenterAdmin)
admin.site.register(Member, MemberAdmin)
