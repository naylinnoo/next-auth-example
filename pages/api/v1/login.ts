var jwt = require('jsonwebtoken');
// pages/api/manual-signin.js
import { NextApiRequest } from 'next';
import { signIn } from 'next-auth/react';

export default async function handler(
  req: NextApiRequest,
  res: any
)  {

console.log(req.body)
  // Your custom logic to authenticate the user
  // For example, you can validate credentials, fetch user data from a database, etc.
const credentials = req.body
	// return NextResponse.json({request: 'hello'});

  // Manually sign in the user

  const secret = process.env.NEXTAUTH_SECRET;

  const response = await fetch("http://localhost:8000/api/login", {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" }
        })



        console.log("res.ok",response.ok)

        const user = await response.json()
  
        // If no error and we have user data, return it
         if (response.ok && user) {
          // Create a token

          console.log(credentials)
          const token = jwt.sign(credentials, secret, { expiresIn: '1h' });

          // Return user and token in an object


          return res.status(200).json({ ...user, token })
        } else {
          // Return null if authentication fails
          return res.status(412).json({ message: 'failed' })
        }



  // if (result.error) {
  //   return res.status(401).json({ error: result.error });
  // }

  // // Return a success response with user data
  return res.status(200).json({ user: user })
}
