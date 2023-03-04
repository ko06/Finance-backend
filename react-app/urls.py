#...
from django.urls import re_path
from  finserve.views import home

#...
urlpatterns = [
    re_path(r".*", home) # RegExpr: any character is correct
]
