from flask import Blueprint, request, jsonify
from backend import db, bcrypt
from backend.models import Users, Appointment, doctor, DoctorAvailabilty, MedicalRecord
from datetime import datetime

main = Blueprint('main', __name__)

@main.route('/login', methods=['GET'])
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

@main.route('/book_appointment_existing_user', methods=['POST'])
def book_appointment(): #If user has logged in
    doctor_id = "033273c5-25e5-4b26-b125-a0a4b2e594d7"

    data = request.get_json()
    user_id = data.get('user_id')
    # doctor_id = data.get('doctor_id')
    appointment_date = datetime.strptime(data.get('appointment_date'), '%Y-%m-%d').date()
    start_time = datetime.strptime(data.get('start_time'), '%H:%M:%S').time()
    end_time = datetime.strptime(data.get('end_time'), '%H:%M:%S').time()
    description = data.get('description', '')

    appointment = Appointment.query.filter_by(
        doctor_id=doctor_id,
        appointment_date=appointment_date,
        ).all()
    
    print(appointment)

    if appointment == []:
        #Book the appointment
        new_appointment = Appointment(
        user_id=user_id,
        doctor_id=doctor_id,
        appointment_date=appointment_date,
        start_time=start_time,
        end_time=end_time,
        description=description,
        status='scheduled'
        )

        db.session.add(new_appointment)
        db.session.commit()

        return jsonify({'message': 'Appointment booked successfully!', 'appointment_id':str(new_appointment.appointment_id)}), 201

    # if not appointment:
    #     return jsonify({'error': 'Doctor not available for this date'}), 400
    
    # for available_entries in appointment: 
    #     if (available_entries.start_time <= start_time and available_entries.end_time >= end_time):
    #         return jsonify({'error': 'Doctor not available during the requested time.'}), 400
    
    print("running")
    #Book the appointment
    new_appointment = Appointment(
        user_id=user_id,
        doctor_id=doctor_id,
        appointment_date=appointment_date,
        start_time=start_time,
        end_time=end_time,
        description=description,
        status='scheduled'
    )


    db.session.add(new_appointment)
    db.session.commit()
    return jsonify({'message': 'Appointment booked successfully!', 'appointment_id':str(new_appointment.appointment_id)}), 201


@main.route('/get_appointments', methods=['GET'])
def get_appointments():
    try:
        current_appointments = Appointment.query.all()

        appointments_data = []
        for data in current_appointments:
            appointments_data.append({
                'appointment_date': data.appointment_date.strftime('%Y-%m-%d'),
                'start_time': data.start_time.strftime('%H:%M'),
                'end_time': data.end_time.strftime('%H:%M'),
            })
        return jsonify(appointments_data)
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    

@main.route('/add_medical_record', methods=['POST'])
def add_medical_record():
    data = request.get_json()
    
    # Extract data from request
    email = data.get('email')
    prescription = data.get('prescription')
    problem = data.get('problem')
    document = data.get('document', None)
    date = data.get('date')

    # Validdate the required fields
    if not all([email, prescription, problem, date]):
        return jsonify({'error': 'Missing required fields'}), 400
    
    # Validate if the user exists
    user = Users.query.filter_by(email=email).first()
    if not user:
        return jsonify({'error': 'User not found'}), 404
    
    new_record = MedicalRecord(
        email = email,
        prescription=prescription,
        problem=problem,
        document=document,
        date=date
    )

    db.session.add(new_record)
    db.session.commit()

    return jsonify({'message': 'Medical record added successfulllt!'}), 201