// app/api/portfolio/route.ts
import { NextResponse } from 'next/server';
import { PortfolioService } from '@/lib/services/portfolio.service';

export const dynamic = 'force-dynamic';
export const revalidate = 3600; // Revalidate every hour

export async function GET() {
  try {
    const data = await PortfolioService.getAllPortfolioData();

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error('Portfolio API Error:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch portfolio data',
      },
      { status: 500 }
    );
  }
}