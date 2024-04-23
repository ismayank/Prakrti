from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model
User = get_user_model()

class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ('id', 'email', 'name', 'password')
        
        
from rest_framework import serializers

class UserSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100)