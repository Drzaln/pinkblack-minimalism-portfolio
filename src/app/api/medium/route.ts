import { NextResponse } from 'next/server';
import dotenv from 'dotenv';

export const dynamic = 'force-dynamic';
export const revalidate = 3600; 

dotenv.config({ path: '.env' });

export async function GET() {
  try {
    const username = process.env.MEDIUM_USERNAME || "mzhaaf"
    const response = await fetch(`https://medium.com/feed/@${username}`);

    if (!response.ok) {
        console.log("failedddd to fetch medium")
      throw new Error('Failed to fetch Medium feed');
    }

    const xmlText = await response.text();
    
    const posts = parseRSS(xmlText);

    console.log("====",posts)

    return NextResponse.json({
      success: true,
      data: posts.slice(0, 3),
    });
  } catch (error) {
    console.error('Medium API Error:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch Medium posts',
      },
      { status: 500 }
    );
  }
}

function parseRSS(xmlText: string): MediumPost[] {
  const posts: MediumPost[] = [];
  
  // Extract items using regex (simple XML parsing)
  const itemRegex = /<item>(.*?)<\/item>/gs;
  const items = xmlText.match(itemRegex) || [];
  
  for (const item of items) {
    const title = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1] || '';
    const link = item.match(/<link>(.*?)<\/link>/)?.[1] || '';
    const pubDate = item.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] || '';
    
    // Extract categories
    const categoryMatches = item.match(/<category><!\[CDATA\[(.*?)\]\]><\/category>/g) || [];
    const categories = categoryMatches.map(cat => 
      cat.match(/<category><!\[CDATA\[(.*?)\]\]><\/category>/)?.[1] || ''
    ).filter(Boolean);

    if (title && link) {
      posts.push({
        title,
        link,
        pubDate,
        categories,
      });
    }
  }
  
  return posts;
}