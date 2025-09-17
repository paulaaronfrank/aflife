#!/usr/bin/env python3
"""
Script to add some test data to the countries database
"""
from app import app, db, Country

def add_test_data():
    with app.app_context():
        # Mark a few countries as visited for testing
        test_countries = [
            ('United States of America', 2020),
            ('Canada', 2019),
            ('France', 2021),
            ('Germany', 2022),
            ('Japan', 2023),
            ('United Kingdom of Great Britain and Northern Ireland', 2018),
            ('Australia', 2021),
            ('Italy', 2022),
            ('Spain', 2019),
            ('Netherlands', 2020)
        ]
        
        for country_name, visit_year in test_countries:
            country = Country.query.filter_by(name=country_name).first()
            if country:
                country.has_visited = True
                country.visit_year = visit_year
                print(f"Marked {country_name} as visited in {visit_year}")
            else:
                print(f"Country {country_name} not found")
        
        db.session.commit()
        print("\nTest data added successfully!")

if __name__ == "__main__":
    add_test_data()


