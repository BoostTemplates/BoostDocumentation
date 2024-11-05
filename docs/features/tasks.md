---
sidebar_position: 1
---

# Tasks

One of most important parts of having algorithms running on the server is to ability to schedule them to execute some work. This can be achieved with Boosts tasks distributed via Celery.

Tasks are divided into two sections: `task` and `reply`.

All `tasks` and `replies` are running asynchrounously to the rest of the application. The `task` is process executed in Celery workers, while `reply` is result collector, which keeps track of all tasks in execution and checks when they are collected.

# How do tasks work:

To register your own tasks, you need to first go to: `app\tasks\services`, there you will find two files `__init__.py` which works as tasks register and `user_tasks.py` which serves as example for tasks.

Tasks and replies need to follow certain structure:

```Python
def user_task(user_id,payload):
    # here goes your code
    return required_payload

def user_task_reply(task_id, user_id, payload):
    # here goes reply code
    # payload = `required_payload` from `user_task`
```

You can specify any functionality you want in tasks and return any payload as long as it is not `object` or `function`. Then that returned payload will be passed to `reply` with payload argument. 


# Where do tasks and replies live:

Tasks and Replies function bit different to each other. First one is execute in celery worker, hence it does not have shared memory with the rest of the user app code, but it can access database.

Replies on the other hand are executed next to the flask main app, it means you can use all queues and other in memory resources to share code between endpoints and replies.

