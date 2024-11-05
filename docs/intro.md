---
sidebar_position: 1
---

# Boost Intro

Boost your python server into production!

## Getting Started

Get started with **BOOST**.

### What you'll need

- [Python](https://www.python.org/) version 3.x.x:
- [uv](https://github.com/astral-sh/uv) python package manager:
- [Docker](https://www.docker.com/),
- [Nginx](https://nginx.org/),
- Linux server you can run your project on or access to Linux operating system like [DigitalOcean](https://www.digitalocean.com/):
  - We are not covering deployment on the server

## Quick startup

To quickly get hands on the Boost let's spin server first.

### Development debug startup

The easiest way to start the code is to simply run `main.py` with python. However boost has two more components which are necessary to run the application: `database` and `task queue`. The first one is handled by [postgres](https://www.postgresql.org/) docker and other one by [Celery](https://docs.celeryq.dev/en/stable/).

To run the code first go to root directory of the project and run:

```
docker compose up database
```

Then move to app directory:

```
cd app;
```

And run main application with `uv`:

```
uv run main.py
```

This should start app with access to database, but not yet access to distributed task queue. For that we need to spin Celery, and to run it call following command in different terminal:

```
celery -A tasks worker --loglevel=info -E
```

This basic setup should give you access to demo with `user dashboard` and `admin dashboard` (Bare in mind those two are not feature complite, but are showcases of features offered by Boost). 

With all of this finished you should be able to go to:

```
http://localhost:5000/
```
and register new user, or go to:

```
http://localhost:5000/admin
```

and login as admin.

### Full docker startup

Full docker startup seems to be simpler than development, one but may be more frustrating to work and debug due to aditional container layer.

To start simply run:

```
docker compose up 
```

However bare in mind that you need to have properly configured project.


