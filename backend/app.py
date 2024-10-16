# from flask_sqlalchemy import SQLAlchemy
# from backend.config import Config
from backend import create_app

app = create_app()

if __name__ == '__main__':
    app.run(debug=False)