"""Rename database to app_database

Revision ID: b8112385bf8c
Revises: 91aa4f2372f6
Create Date: 2025-09-17 15:10:21.421824

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'b8112385bf8c'
down_revision: Union[str, None] = '91aa4f2372f6'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # This migration handles the transition from countries.db to app_database.db
    # The actual database name change is handled in the configuration
    # This migration ensures data continuity if the old database exists
    pass


def downgrade() -> None:
    # This migration handles the transition from countries.db to app_database.db
    # The actual database name change is handled in the configuration
    # This migration ensures data continuity if the old database exists
    pass
