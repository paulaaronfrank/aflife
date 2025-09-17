"""
Shared functions for countries data operations
These functions can be used by both API routes and other parts of the application
"""
from models import Country

def get_visited_countries():
    """Get all countries that have been visited"""
    return Country.query.filter_by(has_visited=True).all()

def get_visited_countries_count():
    """Get the count of visited countries"""
    return Country.query.filter_by(has_visited=True).count()

def get_total_countries_count():
    """Get the total count of countries in the database"""
    return Country.query.count()

def get_countries_stats():
    """Get comprehensive countries statistics"""
    total_countries = get_total_countries_count()
    visited_countries = get_visited_countries_count()
    unvisited_countries = total_countries - visited_countries
    
    return {
        'total_countries': total_countries,
        'visited_countries': visited_countries,
        'unvisited_countries': unvisited_countries,
        'visited_percentage': round((visited_countries / total_countries * 100), 2) if total_countries > 0 else 0
    }
