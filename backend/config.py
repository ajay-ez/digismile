import os

class Config:
    # SQLALCHEMY_DATABASE_URI = 'postgresql://postgres:postgres@54.224.39.171:5432/digismile'
    SQLALCHEMY_DATABASE_URI = 'postgresql://postgres:postgres@54.224.39.171:5432/digismile'

    SQLALCHEMY_TRACK_MODIFICATION = False
    JWT_SECRET_KEY = os.getenv('JWT_SECRET_KEY', 'your_jwt_secret_key')
    
