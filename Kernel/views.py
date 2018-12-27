from django.http import HttpResponse
from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.shortcuts import render, get_object_or_404
from Kernel.models import Fichier
from Kernel.form import FichierForm
from . import utils 
import json, os, io, csv
from django.contrib import messages
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.shortcuts import redirect

def home(request):
	return render(request, 'Kernel/accueil.html')

def newFile(request):
	if request.method == 'POST':
		form = FichierForm(request.POST, request.FILES)
		if form.is_valid():
			fichier = form.save(commit=False)
			data = utils.csvToArrayData(request.FILES['file'], request.POST['delimiter'])
			fichier.absc_data = utils.getColumn(data[0],int(request.POST['abscisse']))
			fichier.ord_data = utils.getColumn(data[0],int(request.POST['ordonnee']))
			fichier.save()
			return redirect('plot', id_plot=fichier.pk)
	else:
		form = FichierForm()
	return render(request, 'Kernel/import.html', {'form': form,  'fichier': json.dumps('')})

@csrf_exempt
def preLoadData(request):
	csv_file = request.FILES['file']
	print(request.POST['delimiter'])
	if not str(csv_file).endswith('.csv'):
		messages.error(request, "Le fichier n'est pas un csv")

	data = utils.csvToArrayData(csv_file, request.POST['delimiter'])
	return JsonResponse(data, safe=False)

def plot(request, id_plot):
	f = Fichier.objects.filter(pk=id_plot).first()
	cleanedDataAbs = utils.preCleanData(f.absc_data)
	cleanedDataOrd = utils.preCleanData(f.ord_data)
	dataAbs = cleanedDataAbs[0]
	dataOrd = cleanedDataOrd[0]
	dataAbsName = cleanedDataAbs[1]
	dataOrdName = cleanedDataOrd[1]
	return render(request, 'Kernel/plot.html', {'fichier': f, 
		'abscisse': json.dumps(dataAbs), 
		'ordonnee': json.dumps(dataOrd)})
