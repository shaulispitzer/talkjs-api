export default async function handler(req, res) {
  const client_id = process.env.FRESHBOOKS_CLIENT_ID;
  const redirect_uri = process.env.FRESHBOOKS_REDIRECT_URI;
  const scopes = 'user:profile:read user:invoices:read user:invoices:write';

  const authUrl = `https://auth.freshbooks.com/oauth/authorize?response_type=code&client_id=${client_id}&redirect_uri=${encodeURIComponent(redirect_uri)}&scope=${encodeURIComponent(scopes)}`;

  res.redirect(authUrl);
}
