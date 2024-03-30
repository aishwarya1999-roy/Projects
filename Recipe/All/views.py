from django.shortcuts import render

def home(request):
    print(request.POST())
    return render(request, 'home.html')

def base(request):
    return render(request, 'base.html')

def recipe(request):
    return render(request, 'recipe.html')