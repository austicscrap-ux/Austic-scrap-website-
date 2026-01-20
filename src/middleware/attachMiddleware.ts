import { NextRequest } from 'next/server';

/**
 * Simplified user verification for development.
 * In a real app, this would check JWT tokens or session cookies.
 */
export const verifyUser = async (req: NextRequest, body?: any) => {
  // For now, we'll assume the user is verified if they are hitting the endpoint.
  // In production, implement real auth logic here.
  return true;
};
