from django.urls import path
from .views import *

urlpatterns = [
    path('categories/', CategoryList.as_view(), name='category-list'),
    path('categories/<slug:slug>/', CategoryDetail.as_view(), name='category-detail'),
    path('recipes/<int:pk>/', RecipeDetail.as_view(), name='recipe-detail'),
]