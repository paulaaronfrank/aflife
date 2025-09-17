from flask import Blueprint, render_template
from functions import get_visited_countries_count

# Create the main website blueprint
main_bp = Blueprint('main', __name__)

@main_bp.route('/')
def index():
    return render_template('index.html')

@main_bp.route('/traveling')
def traveling():
    # Get only the count of visited countries for the header
    visited_count = get_visited_countries_count()
    
    return render_template('traveling.html', 
                         visited_count=visited_count)

@main_bp.route('/sports')
def sports():
    return render_template('sports.html')

@main_bp.route('/music')
def music():
    return render_template('music.html')

@main_bp.route('/technology')
def technology():
    return render_template('technology.html')

@main_bp.route('/about')
def about():
    return render_template('about.html')
