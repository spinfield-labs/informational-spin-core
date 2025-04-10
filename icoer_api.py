# icoer_api.py
# Symbolic API for coherence evaluation
from core_tgu import evaluate_coherence

def evaluate_batch(dataset):
    results = []
    for entry in dataset:
        I_TGU, kappa = evaluate_coherence(entry['S'], entry['L'], entry['E'], entry['C'], entry['M'])
        results.append({
            "turn": entry["turn"],
            "response": entry["response"],
            "I_TGU": I_TGU,
            "kappa": kappa
        })
    return results
