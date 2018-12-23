from django.http import HttpResponse
from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.shortcuts import render, get_object_or_404

def home(request):
    return render(request, 'Kernel/accueil.html')