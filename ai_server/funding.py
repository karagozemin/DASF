import pandas as pd
from model import predict_proposal_quality

df = pd.DataFrame(columns=["proposal", "votes", "quality_score", "final_score", "allocated_funds"])

budget = 6000  # Total budget ($6,000)

def update_funding(proposals):
    """Updates fund allocation based on AI score and votes"""
    global df

    df = pd.DataFrame(proposals)  # Convert JSON data to DataFrame

    if "proposal" not in df.columns or "votes" not in df.columns:
        raise ValueError("Missing data! 'proposal' and 'votes' columns are required.")

    # Compute proposal quality using the AI model
    df["quality_score"] = df["proposal"].apply(predict_proposal_quality)

    # Compute the final score (70% AI score + 30% votes)
    df["final_score"] = df["quality_score"] * 0.7 + (df["votes"] / df["votes"].max()) * 0.3

    # Distribute funds based on final score
    df["allocated_funds"] = (df["final_score"] / df["final_score"].sum()) * budget

    return df.to_dict(orient="records")
