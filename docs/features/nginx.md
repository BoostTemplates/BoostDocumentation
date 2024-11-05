---
sidebar_position: 8
---

# Nginx Configuration Documentation

## Instal nginx:

```
sudo apt update
sudo apt install nginx
```

then run:

```
./nginx/config_nginx_firewall.sh
```

it will setup firewall for you, and enable only https traffic.

## Setup your domain in nginx file:

To setup your nginx file, setup your domain with:
```
    server_name <YOUR_DOMAIN_COM>;
```

and setup your proxy address to:

```
proxy_pass https://<YOUR_MACHINE_IP>:5000;
```

Then change bottom of the file with:

```nginx

server {
    listen 80 default_server;
    server_name <YOUR_DOMAIN_COM>;

    if ($host = <YOUR_DOMAIN_COM>) {
        return 301 https://$host$request_uri;
    } # managed by Certbot

    return 404; # managed by Certbot
}
```

## Run config script

After this run `nginx/config_nginx.sh` it will setup file in correct path.