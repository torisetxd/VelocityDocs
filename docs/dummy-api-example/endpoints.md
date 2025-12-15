# API Endpoints

### WARNING: This is a dummy example for illustrative purposes only. These endpoints DO NOT exist.

This guide covers the main API endpoints available.

## Base URL

All API requests should be made to:

```
https://api.example.com/v1
```

## Users Endpoint

### Get All Users

```bash
GET /users
```

Returns a list of all users in the system.

**Response:**

```json
{
  "data": [
    {
      "id": "usr_123",
      "name": "John Doe",
      "email": "john@example.com"
    }
  ]
}
```

### Get Single User

```bash
GET /users/{id}
```

Fetch a specific user by ID.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| id | string | The user ID |

### Create User

```bash
POST /users
```

Create a new user account.

**Request Body:**

```json
{
  "name": "Jane Smith",
  "email": "jane@example.com"
}
```

## Error Handling

All errors follow this format:

```json
{
  "error": {
    "code": "INVALID_REQUEST",
    "message": "Description of what went wrong"
  }
}
```

Common error codes:
- `INVALID_REQUEST` - Malformed request
- `UNAUTHORIZED` - Missing or invalid authentication
- `NOT_FOUND` - Resource not found
- `RATE_LIMIT` - Too many requests
