// app/api/getResults/route.ts
import { NextResponse } from 'next/server';
// Define the structure of your results
interface Result {
  id: string;
  name: string;
  value: number; // Update these fields as per your actual result structure
}


export async function GET() {
  try {
    // Logic to fetch results
    const results: Result[] = []; // Replace with actual fetching logic
    return NextResponse.json(results);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Failed to fetch results' }, { status: 500 });
  }
}

