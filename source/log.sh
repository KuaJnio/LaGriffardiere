#!/bin/bash

tail -f /var/log/nginx/access.log /var/log/nginx/error.log /var/log/uwsgi/lagriffardiere_uwsgi.log
