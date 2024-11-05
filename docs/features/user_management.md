---
sidebar_position: 2
---

# User Management

Boost provides basic of usermanagement, so you can start your app without worrying about how to log in users, store them or manage their password. All passwords are hashed, and user can be easily extented by modyfing `models/user.py`.

```Python
import uuid
from config import db
from flask_sqlalchemy import SQLAlchemy
class User(db.Model):
    __tablename__="user"

    id = db.Column(db.String(80), primary_key=True, default=lambda: str(uuid.uuid4()), nullable=False)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)
    activated = db.Column(db.Boolean, nullable=True)
    last_login = db.Column(db.DateTime, nullable=True)
    logged_ttl = db.Column(db.Integer, nullable=True)
    unique_session_id = db.Column(db.String(120), nullable=True)
    access_token = db.Column(db.String(120), nullable=True)
    available_tokens = db.Column(db.Integer, nullable=False, default = lambda: 0)
    frozen_tokens = db.Column(db.Integer, nullable=False, default = lambda: 0)

    ################ SPECIFY YOUR OWN FIELDS ######################
    # FOR EXAMPLE license: 
    license = db.Column(db.String(120), nullable=True)   # License keys often use strings, but ensure length fits
```

User during its lifecycle is stored in postgres database, so both Celery tasks and Flask operations can reach to the same database to fetch or edit same userbase.

## Accessing users from Flask:

To access users from Celery task, you need to import following:

```Python
from config import db
from models.user import User
```

Then to find user you can call query search:

```Python
user = User.query.filter_by(username="johnymnemonic").first()
```

To commit changes you can just simply call:

```Python
db.session.commit()
```

To add new user:

```Python
user = User(
    username = "johnymnemonic",
    email = "johny@mnemonic.com",
    password = bcrypt.generate_password_hash(
        "hashedmemory"
    ).decode(
        'utf-8'
    ),
    last_login = datetime.now(),
    activated = False # email
)

db.session.add(user)
db.session.commit()
```


## Accessing users from Celery:

To access users from Celery task, you need to import following:

```Python
from tasks import session
from models.user import User
```

Then to find user you can call query search:

```Python
user = User.query.filter_by(username="johnymnemonic").first()
```

To commit changes you can just simply call:

```Python
session.commit()
```