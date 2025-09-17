from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class Country(db.Model):
    __tablename__ = 'countries'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False, unique=True)
    iso_code = db.Column(db.String(2), nullable=False, unique=True)
    has_visited = db.Column(db.Boolean, default=False, nullable=False)
    visit_year = db.Column(db.Integer, nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'iso_code': self.iso_code,
            'has_visited': self.has_visited,
            'visit_year': self.visit_year
        }
    
    def __repr__(self):
        return f'<Country {self.name} ({self.iso_code})>'


