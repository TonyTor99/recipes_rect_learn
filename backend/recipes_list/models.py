from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=40)
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.name
    
class Recipe(models.Model):
    category = models.ForeignKey(Category, related_name="recipes", on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to='images/', default='images\default.jpg')
    description = models.TextField()
    instructions = models.TextField()

    def __str__(self):
        return self.title
    