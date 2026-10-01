# Site SAP — Assistance administrative & informatique (Agen)

Next.js (App Router) + Supabase (PostgreSQL) + Vercel.

## 1. Supabase
1. Créer un projet sur https://supabase.com
2. **SQL Editor** → coller et exécuter `supabase/schema.sql`
3. **Project Settings → API** : noter l'URL du projet et la clé `service_role`

## 2. En local
```bash
npm install
cp .env.example .env.local     # puis remplir SUPABASE_URL et SUPABASE_SERVICE_ROLE_KEY
npm run dev                    # http://localhost:3000
```

## 3. Vercel
1. Pousser le dossier sur GitHub
2. https://vercel.com → **Add New → Project** → importer le dépôt (Next.js détecté automatiquement)
3. **Settings → Environment Variables** : ajouter `SUPABASE_URL` et `SUPABASE_SERVICE_ROLE_KEY`
4. Deploy

## Fonctionnement
- `/` accueil & tarifs · `/simulation` · `/rendez-vous` · `/contact`
- Les demandes arrivent dans les tables `rendez_vous` et `messages_contact` (Supabase → Table Editor).
  Passer `statut` à `confirme` ou `annule` ; un RDV annulé libère le créneau.
- Les tarifs (25 € / 35 €), communes et créneaux se modifient dans `src/lib/pricing.js`.
- Téléphone et e-mail affichés : `src/lib/site.js`.
- Sécurité : RLS activé sans policy → la base est inaccessible avec une clé publique ; seules les routes
  `/api/*` écrivent, côté serveur, avec la clé `service_role` (jamais préfixée `NEXT_PUBLIC_`).
