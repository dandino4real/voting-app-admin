// app/api/signIn/route.ts
import { NextResponse } from 'next/server';
// import { ethers } from 'ethers';
// import { db } from '../../../lib/db'; 
// import axios from 'axios';

// Your contract ABI and address

// import contractABI from '../../../contracts/VotingSystemABI.json';
// const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!;

export async function POST(request: Request) {
  const { email, password } = await request.json(); // Adjust based on your user data structure

  try {
    // 1. Retrieve the user's CID from the blockchain based on their email


    // const provider = new ethers.BrowserProvider(window.ethereum);
    // const contract = new ethers.Contract(contractAddress, contractABI, provider);

    // Assuming you have a method to fetch the CID by email or user ID


    // const cid = await contract.getUserCID(email); // Replace with your actual method

    // if (!cid) {
    //   return NextResponse.json({ error: 'User not found' }, { status: 404 });
    // }

    // 2. Fetch the user's data from IPFS
    // const ipfsUrl = `https://ipfs.io/ipfs/${cid}`;
    // const userDataResponse = await axios.get(ipfsUrl);
    // const userData = userDataResponse.data;

    // 3. Verify credentials (assuming userData contains hashed password)
    // const isMatch = await bcrypt.compare(password, userData.password); // Adjust based on how you store passwords

    // if (!isMatch) {
    //   return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    // }

    // 4. Create a session or token for the user
    // Here you can use libraries like jsonwebtoken to create a JWT
    // const token = jwt.sign({ userId: userData.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // return NextResponse.json({ message: 'Sign-in successful', userId: userData.id });
console.log(email, password, )


  } catch (error) {
    console.error('Sign-in error:', error);
    return NextResponse.json({ error: 'Sign-in failed' }, { status: 500 });
  }
}
