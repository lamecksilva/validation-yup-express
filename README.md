## Expressjs Validation with Yup

> Simple middleware to validate request data with yup.

### Try it

Request to `http://localhost:3333/create/1` with the body:

```json
{
	"title": "This is the title",
	"content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	"contact": "author@outlook.com",
	"url": "https://safe-link.me"
}
```

> Example if the body not satifies the yup schema:

```json
// 500 Internal server error
{
	"type": "ValidationError",
	"message": "body.contact must be a valid email"
}
```

God bless you :heart:
