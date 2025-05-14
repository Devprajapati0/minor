from django.urls import path
from . import views

urlpatterns = [
    path('predict/', views.predict_tumor, name='predict-tumor'),
    path('chatbot/', views.chatbot, name='chatbot'),
]
# from django.contrib import admin
# from django.urls import path, include

# urlpatterns = [
#     path('admin/', admin.site.urls),
#     path('api/', include('api.urls')),
# ]