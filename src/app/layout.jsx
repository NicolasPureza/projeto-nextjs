import './globals.css';

export const metadata = {
  title: 'TechStore | Projeto 04 - Next.js',
  description: 'Catálogo de Hardware e Periféricos desenvolvido com Next.js App Router para a atividade do SENAI.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
