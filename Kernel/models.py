from django.db import models
from django.utils import timezone

class Fichier(models.Model):
	nom = models.CharField(max_length=200)
	date = models.DateTimeField(default=timezone.now)
	file = models.FileField(upload_to='uploads/')
	absc_data = models.CharField(max_length=20000)
	ord_data = models.CharField(max_length=20000)
    
	class Meta:
		verbose_name = "fichier"
		ordering = ['date']
    
	def __str__(self):
		return self.nom

