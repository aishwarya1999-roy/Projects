from django.shortcuts import render, redirect
from .models import *
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth import authenticate , login, logout
from django.contrib.auth.decorators import login_required

def home(request):
    return render(request, 'home.html')

def base(request):
   return render(request, 'base.html')
   """ if request.GET.get('search_home'):
        print(request.GET.get('search_home'))"""
        #queryset= queryset.filter(recipe_name__icontains = request.GET.get('search'))
    
def search_page(request):
    return render(request, 'search_page.html')


@login_required(login_url="/login_page/")
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

    if request.GET.get('search'):
        queryset= queryset.filter(recipe_name__icontains = request.GET.get('search'))
        
    context = {'recipes' : queryset}
    return render(request, 'recipe.html', context)

@login_required(login_url="/login_page/")
def delete_recipe(request, id):
    queryset = Recipe.objects.get(id= id)
    queryset.delete()
    return redirect("/recipe/")


@login_required(login_url="/login_page/")
def update_recipe(request, id):
    queryset = Recipe.objects.get(id= id)

    if request.method =="POST":
        data = request.POST
        recipe_image = request.FILES.get('recipe_image')
        recipe_name = data.get('recipe_name')
        recipe_description = data.get('recipe_description')

        queryset.recipe_name = recipe_name
        queryset.recipe_description = recipe_description
        if recipe_image:
            queryset.recipe_image = recipe_image

        queryset.save()
        return redirect("/recipe/")
    context = {'recipe' : queryset}
    return render(request, 'update_recipe.html', context)



def login_page(request):

    if request.method == "POST":
        data = request.POST
        username = data.get('username')
        password = data.get('password')

        if not User.objects.filter(username = username).exists():
            messages.error(request, "Invalid Username", extra_tags='danger')
            return redirect("/login_page/")


        user = authenticate(username = username, password = password)
        if user== None:
            messages.error(request, "Invalid Password", extra_tags='danger')
            return redirect("/login_page/")
        else:
            login(request,user)
            return redirect("/")


    return render(request, 'login.html')



def register_page(request):
    if request.method == "POST":
        data = request.POST
        first_name = data.get('first_name')
        last_name = data.get('last_name')
        username = data.get('username')
        password = data.get('password')
        
        user = User.objects.filter(username = username)

        if user.exists():
            messages.error(request, "User Name Already Exist", extra_tags='danger')
            return redirect("/register_page/")

        user = User.objects.create(
            first_name = first_name, 
            last_name =  last_name, 
            username =  username
        )
        user.set_password(password)
        user.save()
        messages.success(request, "Account Created Succesfully")
        return redirect("/register_page/")

    return render(request, 'register.html')


def logout_page(request):
    logout(request)
    return redirect("/")