# Docker Containers

This template provide two docker containers operating in one network:

```yml
version: '3'
services:
  server:
    [...]

  database:
    [...]

networks:
  db:
```

Do not change `database` container, but if you need to add more microservices feel free to base your other dockers on `server` docker configuration. 

To build other microservices specify another dockerfiles like the one specified for `server`.

# Container Network

Both dockers operate in `db` network, and can access eachother by not specifing `ip_addresses` but rather passing their service names into the network configurations in python code or docker configuration. This feature simplify container to container communication.

# DB backup

Additionally postgres docker specify backup. So everytime you will restart it, it will fetch data from `database` directory. You can do clean restart by removing everything from inside this directory.