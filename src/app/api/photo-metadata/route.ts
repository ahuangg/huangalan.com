import { NextRequest, NextResponse } from 'next/server';
import exifr from 'exifr';
import { promises as fs } from 'fs';
import path from 'path';

export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const photoPath = searchParams.get('path');

  if (!photoPath) {
    return NextResponse.json({ error: 'Photo path is required' }, { status: 400 });
  }

  try {
    // Read the file from public directory
    const filePath = path.join(process.cwd(), 'public', photoPath);
    const fileBuffer = await fs.readFile(filePath);

    // Extract EXIF data
    const exifData = await exifr.parse(fileBuffer, {
      gps: true,
      pick: ['DateTimeOriginal', 'Make', 'Model', 'latitude', 'longitude']
    });

    if (!exifData) {
      return NextResponse.json({
        location: null,
        date: null,
        device: null
      });
    }

    // Format date
    let formattedDate = null;
    if (exifData.DateTimeOriginal) {
      const date = new Date(exifData.DateTimeOriginal);
      formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }

    // Format device
    let device = null;
    if (exifData.Make || exifData.Model) {
      const make = exifData.Make || '';
      const model = exifData.Model || '';
      device = `${make} ${model}`.trim();
    }

    // Format location from GPS coordinates
    let location = null;
    if (exifData.latitude && exifData.longitude) {
      // For now, just show coordinates
      // You can integrate with a reverse geocoding API later if needed
      location = `${exifData.latitude.toFixed(4)}°, ${exifData.longitude.toFixed(4)}°`;
    }

    return NextResponse.json({
      location,
      date: formattedDate,
      device,
      rawExif: exifData // For debugging
    });
  } catch (error) {
    console.error('Error reading EXIF data:', error);
    return NextResponse.json({
      location: null,
      date: null,
      device: null,
      error: 'Failed to read EXIF data'
    });
  }
}
