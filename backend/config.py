import os

class Config:
    SQLALCHEMY_DATABASE_URI = 'postgresql://postgres:qwerty@localhost:5432/Digismile'
    SQLALCHEMY_TRACK_MODIFICATION = False
    JWT_SECRET_KEY = os.getenv('JWT_SECRET_KEY', 'your_jwt_secret_key')
    
