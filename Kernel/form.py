from .models import Fichier
from django import forms

class FichierForm(forms.ModelForm):

	abscisse = forms.CharField(label="Abscisse", initial='',widget=forms.Select())
	ordonnee = forms.CharField(label="Ordonnée", widget=forms.Select())

	class Meta:
		model = Fichier
		fields = ['nom', 'date', 'file']