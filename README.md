# Django Setup Wiki

Instructions for setting up Django projects.

## Django REST Framework

### Technologies

- Django 3.x
- [Poetry](https://python-poetry.org/docs/cli/#install)
- Postgres

### Initial Setup

1. Must have Python 3 & Postgres version 12.x installed and running
1. `django-admin startproject [projectname]`
1. Create a virtual environment: `python -m venv venv`
1. Go into your virtual environment: `source venv/bin/activate`
1. `poetry init`
1. Install `djangorestframework` and `psycopg2`: `poetry add djangorestframework psycopg2`
1. Rename the [projectname] folder to config

1. Create a folder named `apps`
1. Create an `__init__.py` file inside of the `apps` folder

### Users Setup

1. Create a `users` app: `mkdir apps/users` and then `python manage.py startapp users apps/users`
1. Setup custom User model and custom user manager: https://docs.djangoproject.com/en/3.1/topics/auth/customizing/#a-full-example
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
1. Set up Django REST Framework
    1. Add DRF to `INSTALLED_APPS`: `'rest_framework'`
    1. Add DRF URLs to urlpatterns: `path('', include('rest_framework.urls')),`
1. Run the app: `python manage.py runserver`
1. View the API at `localhost:8000` and the admin interface at `localhost:8000/admin`

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
