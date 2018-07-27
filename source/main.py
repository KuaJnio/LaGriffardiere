import os
import flask
from gevent.pywsgi import WSGIServer

app = flask.Flask(__name__)

@app.route('/')
def index():
    return flask.render_template('index.html')

@app.route('/photos')
def photos():
    return flask.render_template('photos.html')

@app.route('/produits')
def produits():
    return flask.render_template('produits.html')

@app.route('/contact')
def contact():
    return flask.render_template('contact.html')

def main():
    http = WSGIServer(('', 80), app.wsgi_app)
    http.serve_forever()


if __name__ == '__main__':
    main()