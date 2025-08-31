import AboutClient from './AboutClient';

export const metadata = {
  title: 'About — Maeve Crossan',
  description:
    'About Maeve Crossan, a full‑stack developer and front‑end specialist based in Dublin focused on accessible, user‑friendly web experiences.',
  openGraph: {
    title: 'About — Maeve Crossan',
    description:
      'About Maeve Crossan, a full‑stack developer and front‑end specialist based in Dublin focused on accessible, user‑friendly web experiences.',
    type: 'profile',
    images: ['/images/headshot.jpg'],
    siteName: 'Maeve Crossan Portfolio',
    locale: 'en_IE',
  },
};

export default function AboutMePage() {
  return <AboutClient />;
}

