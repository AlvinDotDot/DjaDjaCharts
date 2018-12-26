from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
	path('', views.home, name='accueil'),
	path('import', views.newFile, name='import'),
	path('preLoad', views.preLoadData, name='load'),
	path('plot/<int:id_plot>', views.plot, name='plot')
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)