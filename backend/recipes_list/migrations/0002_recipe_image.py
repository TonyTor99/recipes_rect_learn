# Generated by Django 5.2.1 on 2025-05-19 17:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipes_list', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='recipe',
            name='image',
            field=models.ImageField(default='media\\images\\default.jpg', upload_to='images/'),
        ),
    ]
