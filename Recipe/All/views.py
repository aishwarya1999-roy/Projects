from django.shortcuts import render

def recipes(request):
    return render(request, 'recipes.html')

def base(request):
    return render(base, 'base.html')