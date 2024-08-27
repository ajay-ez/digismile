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

class doctor(db.Model):
    __tablename__ = 'doctor'
    
    doctor_id = db.Column(db.UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = db.Column(db.String(100), unique=True, nullable=False)
    specialization = db.Column(db.String(100), unique=False, nullable=True)

class DoctorAvailabilty(db.Model):
    __tablename__ = 'DoctorAvailablity'

    availability_id = db.Column(db.UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    doctor_id = db.Column(db.UUID(as_uuid=True), db.ForeignKey('doctor.doctor_id'), nullable=False)
    start_time = db.Column(db.Date, nullable=False)
    end_time = db.Column(db.Date, nullable=False)
    doctor = db.relationship('doctor', backref='availability')

class Appointment(db.Model):
    __tablename__ = 'appointments'

    appointment_id = db.Column(db.UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = db.Column(db.UUID(as_uuid=True), db.ForeignKey('users.user_id'), nullable=False)
    doctor_id = db.Column(db.UUID(as_uuid=True), db.ForeignKey('doctor.doctor_id'), nullable=False)
    appointment_date = db.Column(db.Date, nullable=False)
    start_time = db.Column(db.Time, nullable=False)
    end_time = db.Column(db.Time, nullable=False)
    description = db.Column(db.Text, nullable=True)
    # status = db.Column(db.String(20), nullable=False, default='scheduled',
    #                    check='status IN('scheduled', 'completed', 'cancelled')')
    status = db.Column(db.String(20), default='scheduled', index=True)
    user = db.relationship('Users', backref='appointments')
    doctor = db.relationship('doctor', backref='appointments')

    __table_args__ = (
        db.CheckConstraint("status IN('scheduled', 'completed', 'cancelled')", name='status_check'),
    )
