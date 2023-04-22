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
    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)
        form.base_fields["status"].required = False
        return form

    def save_model(self, request, obj, form, change):
        obj.status = 1
        if obj.id == None:
            obj.createdBy = request.user
            obj.updatedBy = request.user
            super().save_model(request, obj, form, change)

        else:
            super().save_model(request, obj, form, change)

    class Meta:
        model = Branch
        labels = {
            "AddedBy": "Person name",
        }


class CenterAdmin(admin.ModelAdmin):
    raw_id_fields = ("user", "branch")

    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)
        form.base_fields["status"].required = False
        form.base_fields["shortName"].required = False
        return form

    def save_model(self, request, obj, form, change):
        if obj.id == None:
            obj.createdBy = request.user
            obj.updatedBy = request.user
            super().save_model(request, obj, form, change)

        else:
            super().save_model(request, obj, form, change)

    class Meta:
        model = Center


class RoleAdmin(admin.ModelAdmin):
    raw_id_fields = ("userId", "branchId")

    def save_model(self, request, obj, form, change):
        if obj.id == None:
            obj.createdBy = request.user
            obj.updatedBy = request.user

            super().save_model(request, obj, form, change)

        else:
            super().save_model(request, obj, form, change)

    class Meta:
        model = Role


class MemberAdmin(admin.ModelAdmin):
    raw_id_fields = ("centerId",)
    search_fields = ("name",)
    list_filter = ("centerId",)

    def save_model(self, request, obj, form, change):
        if obj.id == None:
            obj.createdBy = request.user
            super().save_model(request, obj, form, change)

        else:
            super().save_model(request, obj, form, change)

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
