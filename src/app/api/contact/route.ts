import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  return NextResponse.json(
    { 
      success: true, 
      message: 'Contact form submission disabled (Frontend Only)' 
    },
    { status: 200 }
  );
}
