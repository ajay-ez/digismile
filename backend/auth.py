from flask import jsonify
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required
import datetime

# Function to encode a JWT token
def encode_token(user):
    token = create_access_token(identity={'user_id': user.user_id}, expires_delta=datetime.timedelta(days=2))
    return token

# Token-required decorator for securing routes
@jwt_required()
def protected_route():
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200