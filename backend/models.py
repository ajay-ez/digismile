from backend import db
import uuid

class Users(db.Model):
    __tablename__ = 'users'

    user_id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    email = db.Column(db.String(255), unique=True, nullable=False)
    password_hash = db.Column(db.String(255), nullable=False)
    role = db.Column(db.String(10), nullable=False)
    name = db.Column(db.String(255), nullable=False)
    date_of_birth = db.Column(db.Date, nullable=True)
    address = db.Column(db.Text, nullable=True)
    phone_number = db.Column(db.String(20), nullable=True)
    problem = db.Column(db.Text, nullable=True)
