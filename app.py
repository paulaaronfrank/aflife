from flask import Flask, render_template, jsonify
import os

app = Flask(__name__)

# Configuration
app.config['SECRET_KEY'] = 'your-secret-key-here'

# Routes
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/traveling')
def traveling():
    return render_template('traveling.html')

@app.route('/sports')
def sports():
    return render_template('sports.html')

@app.route('/music')
def music():
    return render_template('music.html')

@app.route('/technology')
def technology():
    return render_template('technology.html')

@app.route('/about')
def about():
    return render_template('about.html')

# API endpoint for image data
@app.route('/api/images')
def get_images():
    images = {
        'traveling': '/static/images/hero/traveling.jpg',
        'sports': '/static/images/hero/sports.jpg',
        'music': '/static/images/hero/music.jpg',
        'technology': '/static/images/hero/technology.jpg',
        'about': '/static/images/hero/about.jpg',
        'default': '/static/images/hero/default.jpg'
    }
    return jsonify(images)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8000)
