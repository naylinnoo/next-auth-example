import { NextApiRequest } from "next";
const jwt = require('jsonwebtoken')

export default async function handler(
  req: NextApiRequest,
  res: any
)  {

	const secret = process.env.NEXTAUTH_SECRET;

// console.log(req.headers.authorization)


const token = req.headers.authorization.split(" ");

console.log(token[1])

try{
	const decodedToken = jwt.verify(token[1], secret);
	return res.status(200).json({decodedToken: decodedToken })
	 return Promise.resolve(null);
}catch(e){
	return res.status(500).json({message: `${e}` })
}
}