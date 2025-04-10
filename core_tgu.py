# core_tgu.py
# Informational Spin Coherence Engine (symbolic core)
def evaluate_coherence(S, L, E, C, M):
    kappa = 0.6 + ((S + L + C) / 3) * 0.25
    I_TGU = (0.23*S + 0.21*L + 0.19*E + 0.27*C + 0.10*M) * kappa
    return round(I_TGU, 4), round(kappa, 3)
