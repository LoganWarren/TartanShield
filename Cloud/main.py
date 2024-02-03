from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/predict', methods=['POST', 'OPTIONS'])
def predict():
    if request.method == 'OPTIONS':  # CORS preflight
        return _build_cors_preflight_response()
    elif request.method == 'POST':
        # Your function logic here
        return _build_cors_actual_response({'prediction': 'fake or real'})

def _build_cors_preflight_response():
    response = make_response()
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add('Access-Control-Allow-Headers', '*')
    response.headers.add('Access-Control-Allow-Methods', '*')
    return response

def _build_cors_actual_response(response):
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response
