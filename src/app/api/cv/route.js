import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'MaeveCrossan.pdf');

  try {
    const fileBuffer = await fs.readFile(filePath);

    return new Response(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="MaeveCrossan.pdf"',
        'Cache-Control': 'public, max-age=3600, immutable',
      },
    });
  } catch (error) {
    console.error('Failed to read CV:', error);
    return new Response('CV not found', { status: 404 });
  }
}

export async function HEAD() {
  const filePath = path.join(process.cwd(), 'public', 'MaeveCrossan.pdf');

  try {
    const stats = await fs.stat(filePath);

    return new Response(null, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Length': stats.size.toString(),
        'Cache-Control': 'public, max-age=3600, immutable',
      },
    });
  } catch (error) {
    console.error('Failed to read CV:', error);
    return new Response(null, { status: 404 });
  }
}
