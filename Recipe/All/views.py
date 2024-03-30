from django.shortcuts import render

def home(request):
    if request.method =="POST":
        data = request.POST
        
        recipe_name = data.get('recipe_name')
        recipe_name = data.get('recipe_name')
    return render(request, 'home.html')

def base(request):
    return render(request, 'base.html')

def recipe(request):
    return render(request, 'recipe.html')