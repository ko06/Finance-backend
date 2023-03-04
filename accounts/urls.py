from knox import views as knox_views
from .views import LoginAPI
from django.urls import path
from .resources import who_am_i

urlpatterns = [
    path('login/', LoginAPI.as_view(), name='login'),
    path('logout/', knox_views.LogoutView.as_view(), name='logout'),
    path('whoami/', who_am_i , name='whoami'),
    path('logoutall/', knox_views.LogoutAllView.as_view(), name='logoutall'),
]