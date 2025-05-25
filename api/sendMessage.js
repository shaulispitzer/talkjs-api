import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  const token = jwt.sign(
    {
      tokenType: 'app',
      iss: process.env.TALKJS_APP_ID,
    },
    process.env.TALKJS_SECRET_KEY,
    { expiresIn: '55s' }
  );

  res.status(200).json({ token });
}
