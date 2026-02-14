from flask import Flask, jsonify
from flask_cors import CORS
import psutil

app = Flask(__name__)
CORS(app)  # Enable cross-origin requests

@app.route('/api/stats')
def get_stats():
    """Return current system stats as JSON"""
    cpu_percent = psutil.cpu_percent(interval=1)
    memory = psutil.virtual_memory()
    disk = psutil.disk_usage('/')
    
    return jsonify({
        'cpu': cpu_percent,
        'memory': {
            'percent': memory.percent,
            'used': round(memory.used / (1024**3), 2),  # GB
            'total': round(memory.total / (1024**3), 2)  # GB
        },
        'disk': {
            'percent': disk.percent,
            'used': round(disk.used / (1024**3), 2),  # GB
            'total': round(disk.total / (1024**3), 2)  # GB
        }
    })

if __name__ == '__main__':
    app.run(debug=True, port=5000)
