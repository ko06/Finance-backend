# Generated by Django 3.2.13 on 2023-02-11 08:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('misc', '0002_auto_20230122_1752'),
    ]

    operations = [
        migrations.AlterField(
            model_name='center',
            name='image',
            field=models.ImageField(upload_to='%Y/%m/%d/'),
        ),
    ]