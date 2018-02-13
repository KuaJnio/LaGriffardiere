import os
import flask

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
    

if __name__ == '__main__':
    app.run(host='', port=8080, debug=True)
