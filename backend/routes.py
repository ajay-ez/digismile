from flask import Blueprint, request, jsonify
from backend import db, bcrypt
from backend.models import Users

main = Blueprint('main', __name__)

@main.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')
    if not email or not password:
        return jsonify({'message': 'Email and password are required'}), 400

    def check(old, new):
        if new == old:
            return True
        else:
            return False

    user = Users.query.filter_by(email=email).first()

    # if not user or check(user.password_hash, password):
    if not user or bcrypt.check_password_hash(user.password_hash, password):
        return jsonify({'message': 'login successful'}), 200
    return jsonify({'message': 'Invalid Credentials'}), 401

@main.route('/register', methods=['POST'])
def register():
    data = request.json

    # Extract user details from the request
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')
    date_of_birth = data.get('date_of_birth')
    address = data.get('address')
    phone_number = data.get('phone_number')

    # Validate the input
    if not all([name, email, password]):
        return jsonify({'message': 'Name, email and password are required'}), 400

    # Check if the email already exists
    if Users.query.filter_by(email=email).first():
        return jsonify({'message': 'Email is already registered'}), 400
    
    # Hash the password
    password_hash = bcrypt.generate_password_hash(password).decode('utf-8')

    # Create new user Instance
    new_user = Users(
        name = name,
        email = email,
        password_hash = password_hash,
        date_of_birth = date_of_birth,
        address = address,
        phone_number = phone_number,
        role='patient'
    )

    # Add the new user to the database
    db.session.add(new_user)
    db.session.commit()
    
    return jsonify({'message': 'User registered successfully!'}), 201