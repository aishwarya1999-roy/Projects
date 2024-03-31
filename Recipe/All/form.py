from django import forms
from .models import  Recipe

class  RecipeForm(forms.ModelForm):
    class Meta:
        model = YourModel
        fields = ['field1', 'field2']  # Add other fields as needed