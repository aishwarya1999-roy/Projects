from django.shortcuts import render

def home(request):
    return render(request, 'recipes.html')

def base(request):
    return render(request, 'base.html')