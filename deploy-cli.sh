#!/bin/bash
source config/config.cfg

function do_build {
    docker build -t ${image} .
    docker rmi $(docker images --quiet --filter "dangling=true")
}

function do_upload {
    docker push ${image}
}

function do_test {
    docker run -it --rm -p 80:80 ${image}
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
