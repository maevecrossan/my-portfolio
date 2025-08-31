import PreviousWorkClient from './PreviousWorkClient';

export const metadata = {
  title: 'Previous Work — Maeve Crossan',
  description: 'Selected projects and case studies by Maeve Crossan.',
  openGraph: {
    title: 'Previous Work — Maeve Crossan',
    description: 'Selected projects and case studies by Maeve Crossan.',
    type: 'website',
    images: ['/images/nomad-screenshot.png'],
    siteName: 'Maeve Crossan Portfolio',
    locale: 'en_IE',
  },
};

export default function PreviousWorkPage() {
  return <PreviousWorkClient />;
}

