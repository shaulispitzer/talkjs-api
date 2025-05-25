import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  const { userId, message, conversationId } = req.body;

  const token = jwt.sign(
    {
      tokenType: 'app',
      iss: process.env.TALKJS_APP_ID,
    },
    process.env.TALKJS_SECRET_KEY,
    { expiresIn: '30s' }
  );

  const response = await fetch(`https://api.talkjs.com/v1/${process.env.TALKJS_APP_ID}/conversations/${conversationId}/messages`, {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      sender: userId,
      text: message,
      type: 'UserMessage'
    })
  });

  const result = await response.json();
  res.status(response.status).json(result);
}
