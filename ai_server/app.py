from flask import Flask, request, jsonify
from model import predict_proposal_quality
from funding import update_funding

app = Flask(__name__)
@app.route('/')
def home():
    return "Flask AI API is running!"

@app.route('/favicon.ico')
def favicon():
    return "", 204  # 204 No Content

@app.route('/evaluate', methods=['POST'])
def evaluate_proposal():
    """Evaluates the quality of a proposal and returns an AI-generated score"""
    data = request.json
    proposal = data.get("proposal", "")
    votes = data.get("votes", 0)
    if not proposal:
     return jsonify({"error": "Proposal text is required"}), 400
    score = predict_proposal_quality(proposal, votes)
    return jsonify({"proposal": proposal, "quality_score": score})



@app.route('/funding', methods=['POST'])
def allocate_funding():
    """Receives new proposals and runs the fund allocation process"""
    data = request.get_json()
    if not isinstance(data, list):
        return jsonify({"error": "Invalid data format. Expected a list of proposals."}), 400

    result = update_funding(data)
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)



