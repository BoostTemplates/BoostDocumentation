---
sidebar_position: 4
---

# Routes API

Boost provides structured support to create public, private, and admin routes, facilitating a modular approach to route management.

### Create Public Route

The creation of public routes is a standard feature provided by Flask. In this project, routes and forms are organized into separate files and categorized as public, private, or accessible only by admin users. All route files must be registered (imported) in `main/__init__.py`.

To create a new public route, navigate to pub_routes.py and add a new function as shown below:

```python

@routes_bp.route('/my_new_route')
def my_new_route():
    response = make_response(render_template('pub/my_new_route.html'))  # Render your template
    return response
```
### File Structure for Templates

Templates for public and private routes are served from the templates directory, which is divided into subdirectories:

```
templates
├── admin
│   ├── admin.html
│   └── login.html
├── priv
│   └── user.html
└── pub
    ├── 404.html
    ├── base.html
    ├── join.html
    ├── password_recovery.html
    └── success.html
```
### File Structure for Static Files

Static files are served from the static directory, which is also divided into subdirectories:

```
main/static
├── css
│   ├── admin.css
│   └── user.css
└── icon
```

### Create Private Route

Private routes differ from public routes in that they require an access token for access. These routes should only be available to logged-in users. Here's how to create a private route:

```python
@routes_bp.route('/my_private_route')
@jwt_required(locations=['cookies'])
def user():
    # Obtain user from the JWT
    user = User.query.filter_by(id=get_jwt_identity()).first()

    if user:
        # Execute or serve code for the user
        pass
    else:
        # Redirect to login page if user is not found
        return redirect("join")
```
### Create Admin Route

Admin routes are similar to private routes, but they require additional checks to ensure that the user.id matches CONFIG.ADMIN_ID. Below is an example of how to set up an admin route:

```python

@routes_bp.route('/my_admin_route')
@jwt_required(locations=['cookies'])
def admin():
    user = User.query.filter_by(id=get_jwt_identity()).first()

    if user and user.id == CONFIG.ADMIN_ID:
        # Execute or serve code for the admin
        pass
    else:
        # Redirect to login page if the user is not an admin
        return redirect("join")
```
### Project Structure

The overall project structure for managing routes, forms, and static files is as follows:

```
app/main
├── admin_forms.py
├── admin_routes.py
├── __init__.py
├── priv_forms.py
├── priv_routes.py
├── pub_forms.py
├── pub_routes.py
├── shop_routes.py
├── static
│   ├── css
│   │   ├── admin.css
│   │   └── user.css
│   └── icon
├── task_routes.py
└── templates
    ├── admin
    │   ├── admin.html
    │   └── login.html
    ├── priv
    │   └── user.html
    └── pub
        ├── 404.html
        ├── base.html
        ├── join.html
        ├── password_recovery.html
        └── success.html
```