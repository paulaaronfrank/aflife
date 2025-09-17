from flask import Flask
from config import Config
from models import db
from api import api_bp
from routes import main_bp
import os

app = Flask(__name__)

# Configuration
app.config.from_object(Config)

# Initialize database
db.init_app(app)

# Register blueprints
app.register_blueprint(api_bp)
app.register_blueprint(main_bp)


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8000)
