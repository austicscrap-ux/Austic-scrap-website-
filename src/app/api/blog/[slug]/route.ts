import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) => {
  return NextResponse.json({ message: "Slug-based fetching disabled (Frontend Only)" }, { status: 200 });
};

export const DELETE = async (
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) => {
  return NextResponse.json({ message: "Blog deletion disabled (Frontend Only)" }, { status: 200 });
};