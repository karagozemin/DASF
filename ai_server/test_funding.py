
import requests

data = [
    {"proposal": "Develop a sustainable energy solution for urban areas.", "votes": 50},
    {"proposal": "Create a blockchain-based voting system for local elections.", "votes": 30},
    {"proposal": "Build a self-sustaining community garden for urban neighborhoods.", "votes": 40}
]

url = "http://127.0.0.1:5000/funding"
headers = {"Content-Type": "application/json"}

try:
    response = requests.post(url, json=data, headers=headers)
    response.raise_for_status()  # Sunucu hatalarını yakala
    print("Server response:", response.json())
except requests.exceptions.RequestException as e:
    print("Request error:", e)
except ValueError:
    print("Invalid JSON response from server!")