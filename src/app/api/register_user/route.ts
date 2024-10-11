// app/api/registerUser/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email, password, name, dateOfBirth, socialSecurityNumber, internationalPassport } = await request.json();

  try {
    // Add your logic to handle user registration here
    // e.g., storing data in IPFS, then writing CID to the blockchain


    console.log(email, password, name, dateOfBirth, socialSecurityNumber, internationalPassport )

    return NextResponse.json({ message: 'User registered successfully' });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: 'Registration failed' }, { status: 500 });
  }
}
