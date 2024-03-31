from django.shortcuts import render, redirect
from .models import *
from django.http import HttpResponse
from django.http import JsonResponse
from .form import *

def home(request):
    return render(request, 'home.html')

def base(request):
    return render(request, 'base.html')

def recipe(request):
    if request.method =="POST":
        data = request.POST
        recipe_image = request.FILES.get('recipe_image')
        recipe_name = data.get('recipe_name')
        recipe_description = data.get('recipe_description')

        Recipe.objects.create(
            recipe_image = recipe_image,
            recipe_name = recipe_name,
            recipe_description = recipe_description,
        )

        return redirect("/recipe/")
    
    queryset = Recipe.objects.all()
    context = {'recipes' : queryset}
    return render(request, 'recipe.html', context)


def delete_recipe(request, id):
    queryset = Recipe.objects.get(id= id)
    queryset.delete()
    return redirect("/recipe/")

def update_recipe(request, id):
    queryset = Recipe.objects.get(id= id)

    if request.method =="POST":
        form = RecipeForm(request.POST, instance=item)
        if form.is_valid():
            form.save()
            return redirect("/recipe/")
    else:
        form = RecipeForm(instance=item)
    return render(request, 'update_item.html', {'form': form})