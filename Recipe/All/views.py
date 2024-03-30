from django.shortcuts import render

def home(request):
    return render(request, 'home.html')

def base(request):
    return render(request, 'base.html')

def recipe(request):
    if request.method =="POST":
        data = request.POST
        recipe_image = request.FILES("recipe_image")
        recipe_name = data.get('recipe_name')
        recipe_description = data.get('recipe_description')

        print(recipe_description)
        print(recipe_name)
        print(recipe_imagee)
    return render(request, 'recipe.html')