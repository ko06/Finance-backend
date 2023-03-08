from django.contrib.auth.models import User
from .serializers import WhoamiSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from knox.auth import TokenAuthentication
from rest_framework.response import Response
from misc.models import Role

# class Whoami(generics.ListAPIView):
#     model = User
#     serializer_class = WhoamiSerializer
#     authentication_classes = (TokenAuthentication,)
#     permission_classes = (IsAuthenticated,)

#     def get_queryset(self):
#         # import pdb; pdb.set_trace()
#         user_obj = User.objects.filter(id=self.request.user.id)
#         return user_obj
@api_view(["GET"])
def who_am_i(request):
        user = request.user
        role = Role.objects.filter(userId=user.id)
        try:
            role_type = role[0].role
            return Response({
                "id": user.id,
                "username": user.username,
                "first_name": user.first_name,
                "last_name": user.last_name,
                "email": user.email,
                "is_admin": role_type == "AD",
                "is_branch_manager": role_type == "BM",
                "is_staff": role_type == "ST",
                })
            
        except Exception as e:
              return Response({
                  "message": 'user not available' 
              })

              
        
        
    

