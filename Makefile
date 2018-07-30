source="$(PWD)/source"

default:
	docker rm -f lagriffardiere ||:
	docker run -d --restart always --name lagriffardiere -p 80:80 -v $(source):/usr/share/nginx/html:ro nginx
	docker logs -f lagriffardiere
