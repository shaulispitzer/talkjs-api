// export default async function handler(req, res) {
//   const { code } = req.query;

//   if (!code) {
//     return res.status(400).json({ error: 'Missing authorization code' });
//   }

//   try {
//     const response = await fetch('https://api.freshbooks.com/auth/oauth/token', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         grant_type: 'authorization_code',
//         client_id: process.env.FRESHBOOKS_CLIENT_ID,
//         client_secret: process.env.FRESHBOOKS_CLIENT_SECRET,
//         code,
//         redirect_uri: process.env.FRESHBOOKS_REDIRECT_URI
//       })
//     });

//     const data = await response.json();
//     console.log('FreshBooks tokens:', data);

//     // You can persist this somewhere else (Storage by Zapier, Google Sheet, etc.)
//     return res.status(200).json(data);
//   } catch (err) {
//     return res.status(500).json({ error: err.message });
//   }
// }
