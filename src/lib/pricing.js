export const PRIX_HEURE = 25;
export const PRIX_PACK_2H = 35;
export const CREDIT_IMPOT = 0.5;

export const CRENEAUX = ['09h00 - 11h00', '11h00 - 12h30', '14h00 - 16h00', '16h00 - 18h00'];
export const COMMUNES = ['Agen', 'Boé', 'Le Passage', 'Bon-Encontre', 'Castelculier', 'Lafox'];
export const PRESTATIONS = [
  { value: `Forfait 1h (${PRIX_HEURE} €)`, label: `Forfait 1h — Assistance Ponctuelle (${PRIX_HEURE} €)` },
  { value: `Forfait 2h (${PRIX_PACK_2H} €)`, label: `Forfait 2h — Pack Approfondi (${PRIX_PACK_2H} €)` },
  { value: 'Assistance Administrative', label: 'Assistance Administrative générale' },
  { value: 'Assistance Informatique', label: 'Assistance & Pédagogie Informatique' },
];

export const eur = (n) => n.toFixed(2).replace('.', ',') + ' €';

export function calculerBudget(heures, mode) {
  let brut;
  if (mode === 'pack2h') {
    // 35 € par tranche de 2h + 25 € par heure supplémentaire isolée
    brut = Math.floor(heures / 2) * PRIX_PACK_2H + (heures % 2) * PRIX_HEURE;
  } else {
    brut = heures * PRIX_HEURE;
  }
  return { brut, net: brut * CREDIT_IMPOT };
}
