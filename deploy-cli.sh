#!/bin/bash
version_major=0
version_minor=1
version="${version_major}.${version_minor}"

registry_ip="kuajstry.ddns.net"
registry_port=5000
registry="${registry_ip}:${registry_port}"

image_name="lagriffardiere"
image="${registry}/${image_name}:${version}"


function do_build {
    docker build -t ${image} .
    docker rmi $(docker images --quiet --filter "dangling=true")
}

function do_upload {
    docker push ${image}
}

function do_test {
    docker run -it --rm -p 8090:80 ${image}
}

case "$1" in
    build)
        do_build
        ;;
    upload)
        do_upload
        ;;
    test)
        do_build
        do_test
        ;;
    *)
        echo $"Usage: $0 {build|upload|test}"
        exit 1
esac
