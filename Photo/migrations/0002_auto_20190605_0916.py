# Generated by Django 2.2.2 on 2019-06-05 07:16

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('Photo', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='photo',
            name='like',
            field=models.BigIntegerField(default=0),
        ),
        migrations.AddField(
            model_name='photo',
            name='publish_date',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
