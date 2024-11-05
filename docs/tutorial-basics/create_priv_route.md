---
sidebar_position: 4
---

# Create Private Route

Private routes are different from public in way that you need to provide access token before accessing them. Those routes should be provided only to loged users:

```Python
@routes_bp.route('/my_private_route')
@jwt_required(locations=['cookies'])
def user():

    # obtain user from the jwt
    user = User.query.filter_by(
        id=get_jwt_identity()
    ).first()

    if user:
      # execute or serve code for user
    else:
      # else redirect to login page
      return redirect("join")
```

# Create Admin Route

Admin routes are no different to private, you just need to make sure `user.id` is same as `CONFIG.ADMIN_ID`.