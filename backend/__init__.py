from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from backend.config import Config
from flask_migrate import Migrate
import os

db = SQLAlchemy()
bcrypt = Bcrypt()
migrate = Migrate()

def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)
    app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')
    print("app->", app.config)
    db.init_app(app)
    bcrypt.init_app(app)
    migrate.init_app(app, db)

    from backend.routes import main
    app.register_blueprint(main)

    return app