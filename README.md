# Django Setup Wiki

Instructions for setting up Django projects.

**Table of Contents**

1. [General Setup for all Django Projects](#general-setup-for-all-django-projects)
1. [Django REST Framework](#django-rest-framework)
1. [Django GraphQL](#django-graphql)
1. [Django MongoDB](#django-mongodb)
1. [Full-Stack Django](#full-stack-django) (with templates)

## General Setup for all Django Projects

### Recommended Technologies

- Django 5.x
- [Poetry](https://python-poetry.org/docs/cli/#install)
- Postgres: You can use MySQL or SQL Lite, but Postgres is recommended by the Django official docs. The only exception is if you want to use MongoDB or another NoSQL database with your project. You can find [details for that below](#django-mongodb).

### Initial Setup

1. Must have Python 3, [Django]((https://docs.djangoproject.com/en/3.1/topics/install)), and Postgres version 15.x installed
1. Make sure Postgres is running on your machine
1. `django-admin startproject [projectname]`
1. Use Poetry's built-in environment or go ahead and create a new virtual environment: `python -m venv venv`
1. Go into your virtual environment: `source venv/bin/activate` (not necessary if you are using Poetry)
1. Run `poetry init` -> This will create a TOML file for you with your project config where Poetry will add your dependencies
1. Install `psycopg2-binary`: `poetry add psycopg2-binary`
1. Rename the [projectname] folder to config

1. Create a folder named `apps`
1. Create an `__init__.py` file inside of the `apps` folder (not required for Python 3.8+ but some libraries, like Pytest, still require it)

### Users Setup

1. Create a `users` app: `mkdir apps/users` and then `python manage.py startapp users apps/users`
2. Make sure you add `apps.users` to installed apps in the settings.py file
3. Also, if you are using an `apps` folder as I recommend in this wiki, you will need to change the name of every Django app in the apps.py file: e.g. from `name = users` to `name = apps.users`
4. Setup custom User model and custom user manager: [https://docs.djangoproject.com/en/3.1/topics/auth/customizing/#a-full-example](https://docs.djangoproject.com/en/5.1/topics/auth/customizing/#a-full-example)
```py
AUTH_USER_MODEL = 'users.User'
```

1. Set up admin interface for User model:
```py
from django.contrib import admin
from .models import User


class UserAdmin(admin.ModelAdmin):
    list_display = ('email', 'is_admin')


admin.site.register(User, UserAdmin
```

### Database Setup

*Postgres is optional, but recommended in the official Django docs.*

1. Setup Postgres in Django settings.py file:
```
'default': {
    'ENGINE': 'django.db.backends.postgresql_psycopg2',
    'NAME': '[dbname]',
    'USER': '[dbadmin]',
    'PASSWORD': '',
    'HOST': 'localhost',
    'PORT': '',
}
```
1. Setup Database in Postgres
    1. Create the database: `CREATE DATABASE [dbname];`
    1. Create DB user: `CREATE USER [dbadmin];
    1. Grant privilages to user for our database: `GRANT ALL PRIVILEGES ON DATABASE coducat TO [dbadmin];`
    1. Run migrations: `python manage.py migrate`
    
### More Setup

1. Create an admin user for logging into the Django admin interface: `python manage.py createsuperuser`
1. Run the app: `python manage.py runserver`
1. View the API at `localhost:8000` and the admin interface at `localhost:8000/admin`

## Django REST Framework

This builds off of the general Django setup steps.

### Technologies

- Django REST Framework
    
### REST Framework Setup

1. Install the REST Framework with Poetry: `poetry add djangorestframework`
1. Set up Django REST Framework
    1. Add DRF to `INSTALLED_APPS`: `'rest_framework'`
    1. Add DRF URLs to urlpatterns: `path('', include('rest_framework.urls')),`
1. You can run the Django app normally: `python manage.py runserver`
1. Now go to localhost:8000 in your browser and you should see Django REST frameworks default page showing you all the routes you have available to you.

### Apps Setup

1. Create apps
1. Create Models
1. Setup Admin interface
1. Create `urls.py` file
1. Setup URLs
1. Setup Views

### Optional Setup

1. Setup token auth
1. Setup nested routes: `rest_framework_nested`
1. Pagination
1. Timestamp util for models

## Django Graphql

### Technologies

- [Django Graphene](https://github.com/graphql-python/graphene-django)
- [Django GraphQL JWT](https://github.com/flavors/django-graphql-jwt)
- [Graphiql](https://github.com/graphql/graphiql)
- [Postman](https://www.postman.com/graphql)

## Django MongoDB

### Technologies

- MongoDB (Running locally)
- [Djongo](https://www.djongomapper.com/get-started)

## Full-Stack Django

**coming soon...**
