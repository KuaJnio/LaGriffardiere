FROM debian:9

ENTRYPOINT ["/bin/bash", "entrypoint.sh"]

WORKDIR /root/lagriffardiere

RUN apt-get update
RUN apt-get install -y python3.5 python3-pip python3-dev build-essential python3-venv nginx net-tools procps

COPY config /tmp

RUN ln -s /tmp/lagriffardiere_nginx.conf /etc/nginx/conf.d/

RUN mkdir -p /root/lagriffardiere/venv
RUN python3 -m venv /root/lagriffardiere/venv
RUN cd /root/lagriffardiere && . venv/bin/activate && pip3 install --upgrade wheel && pip3 install --upgrade setuptools && pip3 install --upgrade -r /tmp/requirements.txt && deactivate
RUN rm /etc/nginx/sites-enabled/default
RUN mkdir -p /var/log/uwsgi
RUN pip3 install --upgrade uwsgi
RUN update-rc.d nginx disable

COPY source .

#RUN chmod -R 664 /root/lagriffardiere
