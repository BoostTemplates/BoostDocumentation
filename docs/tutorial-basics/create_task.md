---
sidebar_position: 1
---

# Create Task

One of most important parts of having algorithms running on the server is to ability to schedule them to execute some work. This can be achieved with Boosts tasks distributed via Celery.

Tasks are divided into two sections: `task` and `reply`.

All `tasks` and `replies` are running asynchrounously to the rest of the application. The `task` is process executed in Celery workers, while `reply` is result collector, which keeps track of all tasks in execution and checks when they are collected.

## Create your first task

To create your first tasks, you need to first go to: `app\tasks\services`, there you will find `user_tasks.py` which serves as example for tasks. Simply open that file and add following code:

```Python
def my_first_task(user_id,payload):
    # here goes your code
    print("Hello from my first tasks")
    return user_id

def my_first_task_reply(task_id, user_id, payload):
    # here goes reply code
    # payload = `required_payload` from `user_task`
    print(f"Hello from my first task reply: {payload}")
```

## Register your first task

To register your own tasks, you need to first go to: `app\tasks\services`, there you will find two files `__init__.py` which works as tasks register. Open it and register your tasks:

```Python
TaskStore().register_task(
    "my_first_task",
    my_first_task,
    my_first_task_reply,
    0 # set cost to zero
)
```

Now it should be visible in `user's dashboard` after login.
