import './globals.css';
import ModeSwitch from '../components/ModeSwitch';

export const metadata = {
  title: 'Assistance Administrative & Informatique à domicile — Agen',
  description:
    "Assistance administrative et informatique à domicile sur le Bassin d'Agen. Accompagnement patient, 50 % de crédit d'impôt.",
};

// Applique le mode senior AVANT l'affichage (évite un « flash » en mode normal)
const initMode = `try{if(localStorage.getItem('sap-mode')==='senior')document.documentElement.setAttribute('data-mode','senior')}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: initMode }} />
      </head>
      <body>
        <main className="container">
          <ModeSwitch />
          {children}
        </main>
        <footer role="contentinfo">
          <div className="container">
            <p>Services à la Personne (SAP) • Micro-entreprise d&apos;Assistance Administrative &amp; Informatique à Domicile • Bassin d&apos;Agen</p>
            <p style={{ marginTop: 6, fontSize: 12, color: '#94a3b8' }}>
              Site conçu pour une accessibilité maximale et une lecture confortable pour les seniors.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
