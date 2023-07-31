// pages/api/manual-signin.js
import { NextResponse } from "next/server";
import { signIn } from 'next-auth/react';

export async function GET(request: Request) {
  // Your custom logic to authenticate the user
  // For example, you can validate credentials, fetch user data from a database, etc.
  const user = {
    id: 123,
    name: 'John Doe',
    email: 'john.doe@example.com',
    // Other user properties as needed
  };

	// return NextResponse.json({request: 'hello'});

  // Manually sign in the user
  const result = await signIn('credentials', {
    redirect: false, // Set to false to prevent automatic redirection
    // Add any custom properties you need in the token
    jwt: {
      id: user.id,
      email: user.email,
      // Other properties you want in the token
    },
    // Add any other options based on your configuration
  });



  // if (result.error) {
  //   return res.status(401).json({ error: result.error });
  // }

  // // Return a success response with user data
  return NextResponse.json({ user: user });
}
