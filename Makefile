build:
	docker build -t lagriffardiere:0.2 .

run:
	docker rm -f lagriffardiere ||:
	docker run -d --restart always --name lagriffardiere -p 80:80 lagriffardiere:0.2
	docker logs -f lagriffardiere
