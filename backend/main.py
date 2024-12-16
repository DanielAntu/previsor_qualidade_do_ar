from flask import Blueprint, Flask, jsonify, request
from flask_cors import CORS

from model_clf import clf
from utils import append_error, select_color, validator_data

api = Blueprint('api', __name__, url_prefix='/api')

@api.route('hello')
def hello():
    return jsonify({'message': 'Hello World!'})

@api.route('/quality', methods=['POST'])
def quality():
    data = request.get_json()

    list_err = []

    temperature = validator_data(data, 'temperature')
    humidity = validator_data(data, 'humidity')
    pm2 = validator_data(data, 'pm2')
    pm1 = validator_data(data, 'pm1')
    no = validator_data(data, 'no')
    so = validator_data(data, 'so')
    co = validator_data(data, 'co')
    pia = validator_data(data, 'pia')
    population_density = validator_data(data, 'population_density')

    list_field = [
        (temperature, 'temperatura'),
        (humidity, 'umidade'),
        (pm2, 'PM2.5'),
        (pm1, 'PM10'),
        (no, 'NO2'),
        (so, 'SO2'),
        (co, 'CO'),
        (pia, 'Distância das indústrias'),
        (population_density, 'Densidade da população')
    ]

    for field in list_field:
        append_error(list_err, field[0], field[1])

    if len(list_err) > 0:
        return jsonify({'error': list_err}), 400
    
    predicts = {
        'Temperature': temperature,
        'Humidity': humidity,
        'PM2.5': pm2,
        'PM10': pm1,
        'NO2': no,
        'SO2': so,
        'CO': co,
        'Proximity_to_Industrial_Areas': pia,
        'Population_Density': population_density
    }

    predict = clf(predicts)

    obj = {
        'quality': predict,
        'color': select_color(predict)
    }

    return jsonify(obj)

app = Flask(__name__)

CORS(app)

app.register_blueprint(api)

if __name__ == '__main__':
    app.run(debug=True)