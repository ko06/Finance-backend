# Generated by Django 3.2.13 on 2023-03-14 02:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('misc', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='branch',
            name='created_at',
        ),
        migrations.RemoveField(
            model_name='branch',
            name='updated_at',
        ),
    ]
