export default async function handler(req, res) {
  const client_id = process.env.FRESHBOOKS_CLIENT_ID;
  const client_secret = process.env.FRESHBOOKS_CLIENT_SECRET;
  const redirect_uri = process.env.FRESHBOOKS_REDIRECT_URI;
  const refresh_token = req.body.refresh_token;

  const tokenRes = await fetch("https://api.freshbooks.com/auth/oauth/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      grant_type: "refresh_token",
      refresh_token,
      client_id,
      client_secret,
      redirect_uri
    }),
  });

  const data = await tokenRes.json();

  return res.status(200).json(data);
}
