import re 
from collections import Counter
import torch
import numpy as np
from transformers import AutoTokenizer, AutoModelForSequenceClassification
tokenizer = AutoTokenizer.from_pretrained("bert-base-uncased")
model = AutoModelForSequenceClassification.from_pretrained(
    "bert-base-uncased", num_labels=2
)
model.config.problem_type = "single_label_classification"

duplicate_check=Counter()

def predict_proposal_quality(text, votes=0):
    """Analyzes the quality of a proposal using an AI model and applies additional rules"""

    # AI Model Prediction
    inputs = tokenizer(text, return_tensors="pt", truncation=True, padding=True)
    outputs = model(**inputs)
    scores = torch.softmax(outputs.logits, dim=1).detach().numpy()
    base_score = float(scores[0][1]) * 100  # Convert AI score to a 0-100 scale

    # **Additional Rules for Scoring**

    # 1. Lower the score if the proposal is repeated multiple times
    duplicate_check[text] += 1
    if duplicate_check[text] > 1:
        base_score -= 5  # Reduce score by 15 if it's a duplicate proposal

    # 2. Lower the score if the text contains excessive praise (5+ praise words)
    praise_words = ["excellent","good", "amazing", "best", "perfect", "outstanding", "legendary"]
    praise_count = sum(text.lower().count(pw) for pw in praise_words)
    if praise_count > 3:
        base_score -= 3  

    # 3. Lower the score if contradictory statements are detected
    contradictory_phrases = [
        ("is very fast", "but extremely slow"),
        ("absolutely correct", "maybe wrong"),
        ("completely reliable", "seems suspicious"),
    ]
    for phrase1, phrase2 in contradictory_phrases:
        if phrase1 in text and phrase2 in text:
            base_score -= 7  # Reduce score by 7 if contradictions exist

    # 4. Increase the score if the text includes realistic, well-supported statements
    realistic_phrases = [
        "scientifically proven",
        "real-world applications",
        "scalable solutions",
        "mathematical modeling"
    ]
    realism_score = sum(text.lower().count(rp) for rp in realistic_phrases)
    base_score += realism_score * 3  # Each valid phrase increases the score by 3

    # 5. Increase reliability score based on the number of votes
    base_score += np.log(1 + votes) * 5  # Logarithmic effect of votes

    # Ensure the score remains within the 0-100 range
    return max(0, min(100, base_score))