# Django Setup Wiki

Instructions for setting up Django projects.

## Django REST Framework

### Technologies

- Django 3.x
- [Poetry](https://python-poetry.org/docs/cli/#install)

### Initial Setup

1. Must have Python 3 & Postgres version 12.x installed and running
1. `django-admin startproject [projectname]`
1. Create a virtual environment: `python -m venv venv`
1. Go into your virtual environment: `source venv/bin/activate`
1. Rename the [projectname] folder to config
1. Setup Postgres in Django:

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

1. Setup custom User model and custom user manager: https://docs.djangoproject.com/en/3.1/topics/auth/customizing/#a-full-example

```py
AUTH_USER_MODEL = 'users.User'
```

1. Setup Database in Postgres
    1. Create the database: `CREATE DATABASE [dbname];`
    1. Create DB user: `CREATE USER [dbadmin];
    1. Grant privilages to user for our database: `GRANT ALL PRIVILEGES ON DATABASE coducat TO [dbadmin];`
    1. Run migrations: `python manage.py migrate`
1. Create an admin user for logging into the Django admin interface: `python manage.py createsuperuser`
1. Run the app: `python manage.py runserver`
1. View the API at `localhost:8000` and the admin interface at `localhost:8000/admin`

### Part 2

1. Create apps
1. Setup URLs
1. Setup templates for home page: `'DIRS': [os.path.join(BASE_DIR, 'apps/templates')]`
1. Create Models
1. Setup Admin interface
1. Setup Views
1. Setup token auth

### Part 3 - Optional

1. Setup nested routes: `rest_framework_nested`
1. Pagination
1. Timestamp util for models
