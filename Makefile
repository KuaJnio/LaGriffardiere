build:
	docker build -t lagriffardiere:0.1 .

run:
	docker rm -f la-griffardiere ||:
	docker run -d --restart always --name la-griffardiere -p 80:80 lagriffardiere:0.1
	docker logs -f la-griffardiere
