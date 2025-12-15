# Authentication

All API requests require authentication via API keys or OAuth tokens.

## API Keys

### Creating an API Key

1. Go to your dashboard
2. Navigate to Settings > API Keys
3. Click "Generate New Key"
4. Copy and store securely (only shown once)

### Using API Keys

Include your API key in the `Authorization` header:

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
  https://api.example.com/v1/users
```

## OAuth 2.0

We support OAuth 2.0 for third-party integrations.

### Authorization Code Flow

**Step 1: Redirect user to authorization endpoint**

```
https://auth.example.com/oauth/authorize?
  client_id=YOUR_CLIENT_ID&
  redirect_uri=YOUR_REDIRECT_URI&
  response_type=code&
  scope=read:users write:data
```

**Step 2: Exchange code for token**

```bash
POST https://auth.example.com/oauth/token
Content-Type: application/json

{
  "grant_type": "authorization_code",
  "code": "AUTH_CODE",
  "client_id": "YOUR_CLIENT_ID",
  "client_secret": "YOUR_CLIENT_SECRET"
}
```

**Response:**

```json
{
  "access_token": "token_abc123...",
  "token_type": "Bearer",
  "expires_in": 3600
}
```

## Rate Limiting

API requests are rate limited to:
- 1000 requests per hour for standard accounts
- 10000 requests per hour for premium accounts

Rate limit info is included in response headers:
- `X-RateLimit-Limit`
- `X-RateLimit-Remaining`
- `X-RateLimit-Reset`

## Security Best Practices

1. **Never commit API keys** to version control
2. **Use environment variables** for sensitive data
3. **Rotate keys regularly** (recommended monthly)
4. **Use HTTPS only** for all requests
5. **Implement request signing** for critical operations
