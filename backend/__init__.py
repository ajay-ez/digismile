from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from backend.config import Config
from flask_migrate import Migrate
import os
from flask_jwt_extended import JWTManager
from flask_mail import Mail, Message


db = SQLAlchemy()
bcrypt = Bcrypt()
migrate = Migrate()
jwt = JWTManager()
mail = Mail()


def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)
    app.config['MAIL_SERVER'] = 'smtp.gmail.com'
    app.config['MAIL_PORT'] = 587
    app.config['MAIL_USE_TLS'] = True
    app.config['MAIL_USE_SSL'] = False
    app.config['MAIL_USERNAME'] = 'digismile.doc@gmail.com'
    app.config['MAIL_PASSWORD'] = 'ghal rbyt ngnt raig'  # google pass: ghal rbyt ngnt raig
    app.config['MAIL_DEFAULT_SENDER'] = 'digismile.doc@gmail.com'
    # print("app->", app.config)
    mail = Mail(app)
    db.init_app(app)
    bcrypt.init_app(app)
    migrate.init_app(app, db)
    jwt.init_app(app)

    from backend.routes import main
    app.register_blueprint(main)

    return app