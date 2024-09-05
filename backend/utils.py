import jwt
from flask import request, jsonify
from datetime import datetime, timedelta
from backend import app

def encode_token(user_id):
    pass
    # try:
    #     payload = {
    #         'exp': datetime.utcnow() + timedelta(hours=1),
    #         'iat': datetime.utcnow(),
    #         'sub': user_id
    #     }
    #     return jwt.encode(payload, app.config[''])