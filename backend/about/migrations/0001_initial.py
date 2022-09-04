# Generated by Django 4.1 on 2022-08-29 00:16

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='About',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('value', models.IntegerField()),
                ('suffix', models.CharField(max_length=1)),
                ('description', models.CharField(max_length=250)),
            ],
            options={
                'verbose_name': 'About',
                'verbose_name_plural': 'About',
            },
        ),
    ]
