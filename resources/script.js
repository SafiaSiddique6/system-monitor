const API_URL = 'http://localhost:5000/api/stats';
const UPDATE_INTERVAL = 2000; // Set interval to update every 2 seconds

async function fetchStats() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Network response was not ok');
        
        const data = await response.json();
        updateUI(data);
        
        document.getElementById('status').textContent = '🟢 Connected';
        document.getElementById('status').className = 'status connected';
    } catch (error) {
        console.error('Error fetching stats:', error);
        document.getElementById('status').textContent = '🔴 Connection Error';
        document.getElementById('status').className = 'status error';
    }
}

function updateUI(data) {
    // Update for CPU
    document.getElementById('cpu-value').textContent = `${data.cpu}%`;
    document.getElementById('cpu-bar').style.width = `${data.cpu}%`;

    // Update for Memory
    document.getElementById('memory-value').textContent = `${data.memory.percent}%`;
    document.getElementById('memory-details').textContent = 
        `${data.memory.used} GB / ${data.memory.total} GB`;
    document.getElementById('memory-bar').style.width = `${data.memory.percent}%`;

    // Update for Disk
    document.getElementById('disk-value').textContent = `${data.disk.percent}%`;
    document.getElementById('disk-details').textContent = 
        `${data.disk.used} GB / ${data.disk.total} GB`;
    document.getElementById('disk-bar').style.width = `${data.disk.percent}%`;
}

// Fetch initial stats
fetchStats();

// Set up automatic updates
setInterval(fetchStats, UPDATE_INTERVAL);
