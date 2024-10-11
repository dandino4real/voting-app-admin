// app/api/storeVote/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { account, voteCID } = await request.json();

  try {
    // Add your logic to store the vote CID on-chain

    console.log(account, voteCID)
    return NextResponse.json({ message: 'Vote stored successfully' });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: 'Failed to store vote' }, { status: 500 });
  }
}
