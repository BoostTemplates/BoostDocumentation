---
sidebar_position: 6
---
# Configuration

BOOST provides the following configurations necessary for the operation of the server template. This section outlines the key settings required for administrative access, task scheduling with Celery, payment processing via Stripe, and email notifications through SMTP. All of these features can be edit and change in `.env` file.

## Postgres Configuration

BOOST provides configuration settings for postgres, allowing you to change `POSTGRES_DB` database name, `POSTGRES_USER` postgres user username, `POSTGRES_PASSWORD` password for username.

```plaintext
# POSTGRES CONFIGURATION
POSTGRES_DB=template_db
POSTGRES_USER=template_user
POSTGRES_PASSWORD=template_password
```

## Flask Configuration

To make flask work correctly with postgres, you should change `<YOUR_IP_ADDRES>` to IP of your machine and your `YOUR_SECRET_KEY` to hash:

```plaintext

SQLALCHEMY_DATABASE_URI=postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@<YOUR_IP_ADDRES>:5431/${POSTGRES_DB}
SECRET_KEY=YOUR_SECRET_KEY
```

## ADMIN Configuration

BOOST provides a straightforward configuration for admin settings:

```plaintext

# ADMIN CONFIGURATION
ADMIN_USER=ADMIN
ADMIN_EMAIL=ADMIN_EMAIL@ADMIN.COM
ADMIN_PASSWORD=NIMDA
```
These settings define the credentials for the admin user, ensuring that authorized personnel can access the administrative features.

## CELERY Configuration

BOOST includes configurations for managing background tasks with Celery:

```plaintext

# CELERY CONFIGURATION
CELERY_BROKER=redis://localhost:6379/0
CELERY_RESULT_BACKEND=redis://localhost:6379/0
CELERY_BROKER_RETRY_ON_STARTUP=1
```
These settings enable the distribution of tasks via Celery for asynchronous execution.

## STRIPE Configuration

For payment processing, BOOST provides the following Stripe configuration:

```plaintext

# STRIPE CONFIGURATION
STRIPE_SECRET=your_key_stripe
STRIPE_YOUR_DOMAIN=http://localhost:5000
```
These settings are required to handle payment transactions within the application.

## SMTP Configuration

BOOST also provides configurations for sending emails via SMTP:

```plaintext

# SMTP CONFIGURATION
SMTP_SERVER=YOUR_SMTP_SERVER
SMTP_PORT=YOUR_SMTP_PORT
SMTP_EMAIL=YOUR_SMTP_EMAIL
SMTP_PASSWORD=YOUR_SMTP_PASSWORD
SMTP_PRODUCT_NAME=YOUR_SMTP_PRODUCT_NAME
```
These settings are necessary for sending out emails from the application.