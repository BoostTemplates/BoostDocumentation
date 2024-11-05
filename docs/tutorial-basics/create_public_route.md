---
sidebar_position: 3
---

# Create Public Route

This is standard feature provided by Flask. Boost divides routes and forms into seperate files, and these are divided into private, public, and only accessible by admin. All files serving routes and forms need to be registered (imported) to `main/__init__.py`. 

To create new route, simply go to `pub_routes.py` and add new function like: 

```Python
@routes_bp.route('/my_new_route')
def my_new_route():
    response = make_response(render_template('pub/my_new_route.html'))  # Render your template
    return response
```

# Where are files served from

Files for public and private routes are served from `templates` directory which divides into subdirectories.

Default file routes look similar to this:

```
templates
├── admin
│   ├── admin.html
│   └── login.html
├── priv
│   └── user.html
└── pub
    ├── 404.html
    ├── base.html
    ├── join.html
    ├── password_recovery.html
    └── success.html
```

# Where are statics served from:

Same as `templates` static files are served from `static` directory which is divided into subdirectories:

```
main/static
├── css
│   ├── admin.css
│   └── user.css
└── icon
```