import requests

data = {"proposal": "We want to develop an AI governance system."}
response = requests.post("http://127.0.0.1:5000/evaluate", json=data)

print(response.json())  # Should return quality score


