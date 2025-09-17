from flask import jsonify
from functions import get_visited_countries, get_countries_stats, get_visited_countries_count

# Import the blueprint from the parent module
from . import api_bp

@api_bp.route('/images')
def get_images():
    """Get image data for different sections"""
    images = {
        'traveling': '/static/images/hero/traveling.jpg',
        'sports': '/static/images/hero/sports.jpg',
        'music': '/static/images/hero/music.jpg',
        'technology': '/static/images/hero/technology.jpg',
        'about': '/static/images/hero/about.jpg',
        'default': '/static/images/hero/default.jpg'
    }
    return jsonify(images)

@api_bp.route('/countries/visited')
def get_visited_countries_api():
    """Get all countries that have been visited (has_visited=True)"""
    visited_countries = get_visited_countries()
    countries_data = [country.to_dict() for country in visited_countries]
    return jsonify({"countries": countries_data})

@api_bp.route('/countries/stats')
def get_countries_stats_api():
    """Get countries statistics"""
    stats = get_countries_stats()
    return jsonify(stats)

@api_bp.route('/countries/visited/count')
def get_visited_countries_count_api():
    """Get the count of countries that have been visited (has_visited=True)"""
    count = get_visited_countries_count()
    return jsonify({"visited_countries_count": count})

@api_bp.route('/countries/visited/iso-codes')
def get_visited_countries_iso_codes():
    """Get ISO-2 codes of visited countries for world map"""
    try:
        visited_countries = get_visited_countries()
        iso_codes = [country.iso_code for country in visited_countries]
        print(f"Found {len(iso_codes)} visited countries: {iso_codes}")
        return jsonify({"iso_codes": iso_codes})
    except Exception as e:
        print(f"Error in get_visited_countries_iso_codes: {e}")
        return jsonify({"error": str(e), "iso_codes": []}), 500
