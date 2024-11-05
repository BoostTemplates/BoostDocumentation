---
sidebar_position: 6
---

# Configure BOOST

Boost provides `.env` file in root directory, which allows you to configure it with all of your services:

## Configure app APP 

Boost uses Postgres for most of database operations (with Redis for message brokerage). To make app work on your local machine, you just need to specify: `YOUR_IP_ADDRESS`.

```Bash
SQLALCHEMY_DATABASE_URI=postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@YOUR_IP_ADDRESS:5431/${POSTGRES_DB}
SECRET_KEY=YOUR_SECRET_KEY
```

:::warning
Before deploying you should change: SECRET_KEY
:::

## Configuration STRIPE

Before shop will work you need to adjust your stripe keys: `STRIPE_SECRET`.

```Bash
# STRIPE CONFIGURATION
STRIPE_SECRET=your_key_stripe
```

## Configure SMPT

If you have email service like protonmail. Then you need to configure it as well before server can send emails:

```
# SMPT CONFIGURATION
SMTP_SERVER=YOUR_SMTP_SERVER
SMTP_PORT=YOUR_SMTP_PORT
SMTP_EMAIL=YOUR_SMTP_EMAIL
SMTP_PASSWORD=YOUR_SMTP_PASSWORD
SMTP_PRODUCT_NAME=YOUR_SMTP_PRODUCT_NAME
```