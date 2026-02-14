# ⚡ Real-Time System Resource Monitor

A lightweight web dashboard that displays your computer's live CPU, RAM, and disk usage in real-time. Built with Python Flask backend and vanilla JavaScript frontend.

![System Monitor Demo](https://img.shields.io/badge/status-active-success.svg)
![Python](https://img.shields.io/badge/python-3.8+-blue.svg)
![Flask](https://img.shields.io/badge/flask-2.0+-green.svg)

## 🎯 Features

- **Real-time monitoring** of system resources
- **Clean, modern UI** with gradient design and smooth animations
- **Live updates** every 2 seconds
- **Responsive design** that works on desktop and mobile
- **Progress bars** for visual representation of resource usage
- **Detailed metrics** showing used/total space for memory and disk

## 🛠️ Technologies Used

### Backend
- **Python 3.8+** - Core programming language
- **Flask** - Lightweight web framework for API
- **psutil** - Cross-platform library for system monitoring
- **Flask-CORS** - Handling cross-origin requests

### Frontend
- **HTML5** - Structure
- **CSS3** - Styling with gradients and animations
- **JavaScript (ES6+)** - Async data fetching and DOM manipulation
- **Fetch API** - Making HTTP requests to backend

## 📋 Prerequisites

Before you begin, ensure you have:
- Python 3.8 or higher installed
- pip (Python package manager)
- A modern web browser (Chrome, Firefox, Safari, Edge)

## 🚀 Installation

### 1. Clone or Download the Project
```bash
git clone <your-repo-url>
cd system-monitor
```

### 2. Create Virtual Environment (Recommended)
```bash
# Windows
python -m venv .venv
.venv\Scripts\activate

# macOS/Linux
python3 -m venv .venv
source .venv/bin/activate
```

### 3. Install Dependencies
```bash
pip install flask psutil flask-cors
```

Or use requirements.txt:
```bash
pip install -r requirements.txt
```

## 📁 Project Structure

```
system-monitor/
├── app.py              # Flask backend API
├── index.html          # Main HTML page
├── resources/          # Frontend assets
│   ├── styles.css      # Styling
│   └── script.js       # JavaScript logic
├── README.md           # Project documentation
└── requirements.txt    # Python dependencies
```

## 🎮 Usage

### Running the Application

1. **Start the Backend Server**
   ```bash
   python app.py
   ```
   The server will start on `http://localhost:5000`

2. **Open the Frontend**
   - Option A: Open `index.html` directly in your browser
   - Option B: Use Python's HTTP server:
     ```bash
     python -m http.server 8000
     ```
     Then visit `http://localhost:8000`

3. **Watch Your System Stats!**
   The dashboard will automatically update every 2 seconds with current CPU, memory, and disk usage.

## 🔧 Configuration

### Changing Update Frequency
Edit `resources/script.js`:
```javascript
const UPDATE_INTERVAL = 2000; // Change to desired milliseconds
```

### Changing Server Port
Edit `app.py`:
```python
app.run(debug=True, port=5000)  # Change port number
```

### Customizing Colors
Edit `resources/styles.css` to change the gradient or accent colors:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
color: #667eea;  /* Stat values color */
```

## 📊 API Endpoints

### `GET /api/stats`
Returns current system statistics in JSON format.

**Response Example:**
```json
{
  "cpu": 23.5,
  "memory": {
    "percent": 67.2,
    "used": 10.75,
    "total": 16.0
  },
  "disk": {
    "percent": 45.8,
    "used": 229.4,
    "total": 500.0
  }
}
```

## 🎨 Customization Ideas

- **Add more metrics**: Network speed, battery status, CPU temperature
- **Historical data**: Store stats and display charts using Chart.js
- **Alerts**: Notify when resources exceed thresholds
- **Multiple disks**: Show all mounted drives
- **Per-core CPU**: Display individual CPU core usage
- **Dark mode**: Add theme toggle

## 🐛 Troubleshooting

### "Connection Error" in Browser
- ✅ Ensure `app.py` is running
- ✅ Check if backend is accessible at `http://localhost:5000/api/stats`
- ✅ Verify firewall isn't blocking port 5000

### Stats Not Updating
- ✅ Open browser console (F12) and check for errors
- ✅ Verify CORS is enabled in Flask
- ✅ Check network tab for failed requests

### Module Not Found Error
```bash
pip install flask psutil flask-cors --break-system-packages
```

## 📝 Requirements.txt

Create a `requirements.txt` file with:
```
Flask==3.0.0
psutil==5.9.6
Flask-CORS==4.0.0
```

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Your Name**
- GitHub: [@SafiaSiddique6](https://github.com/SafiaSiddique6)