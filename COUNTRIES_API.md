# Countries API

A Flask-based API for managing countries data with visit tracking capabilities.

## Features

- **Countries Model**: Stores country information including name, ISO-2 code, visit status, and optional visit year
- **Database Support**: SQLite (default), MySQL, and PostgreSQL
- **Database Migrations**: Using Alembic for schema and data migrations
- **RESTful API**: Simple endpoint to retrieve visited countries

## Database Schema

The `countries` table includes:

- `id`: Primary key (auto-increment)
- `name`: Full country name (unique)
- `iso_code`: ISO-2 country code (unique)
- `has_visited`: Boolean flag indicating if the country has been visited
- `visit_year`: Optional year when the country was visited
- `created_at`: Timestamp when the record was created
- `updated_at`: Timestamp when the record was last updated

## Setup

1. **Install Dependencies**:

   ```bash
   pip install -r requirements.txt
   ```

2. **Database Configuration**:
   The API supports multiple database backends. Configure using environment variables:

   **SQLite (default)**:

   ```bash
   export DB_TYPE=sqlite
   export DATABASE_URL=sqlite:///app_database.db
   ```

   **MySQL**:

   ```bash
   export DB_TYPE=mysql
   export MYSQL_USER=your_username
   export MYSQL_PASSWORD=your_password
   export MYSQL_HOST=localhost
   export MYSQL_PORT=3306
   export MYSQL_DATABASE=app_database
   ```

   **PostgreSQL**:

   ```bash
   export DB_TYPE=postgresql
   export POSTGRES_USER=your_username
   export POSTGRES_PASSWORD=your_password
   export POSTGRES_HOST=localhost
   export POSTGRES_PORT=5432
   export POSTGRES_DATABASE=app_database
   ```

3. **Run Migrations**:

   ```bash
   alembic upgrade head
   ```

4. **Start the Application**:
   ```bash
   python app.py
   ```

## API Endpoints

All API endpoints are prefixed with `/api/` and organized using Flask blueprints.

### GET /api/countries/visited

Returns a list of all countries that have been visited.

### GET /api/images

Returns image data for different sections of the website.

**Countries Response Format**:

```json
{
  "countries": [
    {
      "id": 1,
      "name": "United States of America",
      "iso_code": "US",
      "has_visited": true,
      "visit_year": 2020
    },
    {
      "id": 2,
      "name": "Canada",
      "iso_code": "CA",
      "has_visited": true,
      "visit_year": 2019
    }
  ]
}
```

**Images Response Format**:

```json
{
  "traveling": "/static/images/hero/traveling.jpg",
  "sports": "/static/images/hero/sports.jpg",
  "music": "/static/images/hero/music.jpg",
  "technology": "/static/images/hero/technology.jpg",
  "about": "/static/images/hero/about.jpg",
  "default": "/static/images/hero/default.jpg"
}
```

## Data Population

The database is automatically populated with all 193 UN member states during migration. All countries are initially marked as not visited (`has_visited=False`).

## Testing

1. **Add Test Data**:

   ```bash
   python add_test_data.py
   ```

2. **Test the API**:
   ```bash
   python test_api.py
   ```

## Database Migrations

The project uses Alembic for database migrations with SQLite batch mode enabled for better compatibility.

**Create a new migration**:

```bash
alembic revision --autogenerate -m "Description of changes"
```

**Apply migrations**:

```bash
alembic upgrade head
```

**Rollback migrations**:

```bash
alembic downgrade -1
```

## Application Structure

The application is organized using Flask blueprints and modular route files for better maintainability:

- **`app.py`**: Main Flask application with configuration and blueprint registration
- **`routes.py`**: Main website routes (home, about, sections)
- **`api/routes.py`**: API endpoints under `/api/` prefix
- **`config.py`**: Database and application configuration
- **`models.py`**: SQLAlchemy database models

## File Structure

```
aaron-frank-flask-website/
├── app.py                 # Main Flask application
├── routes.py             # Main website routes
├── config.py             # Database configuration
├── models.py             # SQLAlchemy models
├── requirements.txt      # Python dependencies
├── api/                  # API blueprint
│   ├── __init__.py      # Blueprint initialization
│   └── routes.py        # API route definitions
├── alembic/              # Database migrations
│   ├── versions/         # Migration files
│   └── env.py           # Alembic environment configuration
├── alembic.ini          # Alembic configuration
├── add_test_data.py     # Script to add test data
├── test_api.py          # API testing script
└── instance/
    └── app_database.db  # SQLite database (created after migration)
```

## Environment Variables

| Variable            | Description                               | Default                   |
| ------------------- | ----------------------------------------- | ------------------------- |
| `DB_TYPE`           | Database type (sqlite, mysql, postgresql) | sqlite                    |
| `DATABASE_URL`      | SQLite database URL                       | sqlite:///app_database.db |
| `MYSQL_USER`        | MySQL username                            | root                      |
| `MYSQL_PASSWORD`    | MySQL password                            | (empty)                   |
| `MYSQL_HOST`        | MySQL host                                | localhost                 |
| `MYSQL_PORT`        | MySQL port                                | 3306                      |
| `MYSQL_DATABASE`    | MySQL database name                       | app_database              |
| `POSTGRES_USER`     | PostgreSQL username                       | postgres                  |
| `POSTGRES_PASSWORD` | PostgreSQL password                       | (empty)                   |
| `POSTGRES_HOST`     | PostgreSQL host                           | localhost                 |
| `POSTGRES_PORT`     | PostgreSQL port                           | 5432                      |
| `POSTGRES_DATABASE` | PostgreSQL database name                  | app_database              |
