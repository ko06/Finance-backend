# Generated by Django 3.2.13 on 2023-02-19 02:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('misc', '0004_center_time'),
    ]

    operations = [
        migrations.AddField(
            model_name='role',
            name='blood_type',
            field=models.CharField(choices=[('ab+', 'AB+'), ('ab-', 'AB-'), ('a+', 'A+'), ('a-', 'A-'), ('b+', 'B+'), ('b-', 'B-'), ('o+', 'O+'), ('o-', 'O-')], default='a+', max_length=5),
            preserve_default=False,
        ),
    ]