import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  return NextResponse.json({ message: "Blog creation disabled (Frontend Only)" }, { status: 200 });
};

export const GET = async (req: NextRequest) => {
  return NextResponse.json({
    success: true,
    data: [],
    count: 0,
    totalPages: 0,
    message: "API fetching disabled (Frontend Only)"
  });
};