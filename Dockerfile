FROM debian:9

ENTRYPOINT ["/usr/bin/python3", "-u", "main.py"]

WORKDIR /root/lagriffardiere

RUN apt-get update
RUN apt-get install -y python3-pip

COPY requirements.txt .
RUN python3.5 -m pip install -U -r requirements.txt 

COPY source .