# Endpoints

## `GET /presentations` – Get a list of Presentations

**Response**

```json
[
	{
		"id": 1234,
		"name": "Why Wednesdays Rock",
		"cover": { 
			"id": "a3bcefb9-95a9-456b-a3d6-5508273adf32",
			"image": "https://oaidalleapiprodscus.blob.core.windows.net/…",
			"text": "Wednesday… the best day"
		}
	},
	{
		"id": 1234,
		"name": "7 things to do on a Wednesday",
		"cover": { 
			"id": "a3bcefb9-95a9-456b-a3d6-5508273adf32",
			"image": "https://oaidalleapiprodscus.blob.core.windows.net/…",
			"text": "Wednesday… the best day"
		}
	}
]
```

## `POST /presentations` – Create a Presentation

**Request**

```json
{ 
	"name": "Presentation 1"
}
```

**Response**

Status 201 if successfully created.

```json
{
	"id": 1234,
	"name": "Presentation 1",
	"slides": []
}
```

Status 400 if presentation with the same name exists.

```json
{ 
	"error": "A presentation with the same name already exists."
}
```

## `GET /presentations/:id` – Get a presentation

**Response**

A JSON string representing a list of Slides.

```json
{
	"id": 1234,
	"name": "How to lose a world cup with the best player in history",
	"slides": [
		{ 
			"id": "a3bcef codb9-95a9-456b-a3d6-5508273adf32",
			"image": "https://oaidalleapiprodscus.blob.core.windows.net/…",
			"text": "Wednesday… the best day"
		},
		{
			"id": "a3bcefb9-95a9-456b-a3d6-5508273adf32",
			"image": "https://oaidalleapiprodscus.blob.core.windows.net/…",
			"text": "Friday “is also a good day"
		}
	]
}
```

## `POST /presentations/:id/slides` – Create a slide

**Request**

```json
# Empty
```

**Response**

```json
{
	"id": "a3bcefb9-95a9-456b-a3d6-5508273adf32"
}
```

## `POST /presentations/:id/slides/:number/images` – Create an image

**Request**

```json
{
	"image": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-Qf25exKC4RF5oBGT5JyaHIw2/user-vLxB5VqdFYUZ0BnrY3y3IveM/img-xuRpvh9o0webJJRSJWRMG91G.png?st=2022-12-05T09%3A49%3A24Z&se=2022-12-05T11%3A49%3A24Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-12-05T07%3A39%3A22Z&ske=2022-12-06T07%3A39%3A22Z&sks=b&skv=2021-08-06&sig=nR6Okafudj2MCVu1LbFN8v%2B6diLCO1CyYhuM0e69pjE%3D"
}
```

**Response**

Status 201 if successfully created.

```json
{	"slide": {
			"id": "a3bcef codb9-95a9-456b-a3d6-5508273adf32",
			"image": "https://oaidalleapiprodscus.blob.core.windows.net/…",
			"text": "Wednesday… the best day"
		},

	"image": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-Qf25exKC4RF5oBGT5JyaHIw2/user-vLxB5VqdFYUZ0BnrY3y3IveM/img-xuRpvh9o0webJJRSJWRMG91G.png?st=2022-12-05T09%3A49%3A24Z&se=2022-12-05T11%3A49%3A24Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-12-05T07%3A39%3A22Z&ske=2022-12-06T07%3A39%3A22Z&sks=b&skv=2021-08-06&sig=nR6Okafudj2MCVu1LbFN8v%2B6diLCO1CyYhuM0e69pjE%3D"
}
```

Status 400 if already exists:

```json
{

"error": "Image already exists."

}
```

## `POST /presentations/:id/slides/:number/text` - Create a text

**Request**

```json
{

"text": "Wednesday… the best day"

}
```

**Response**

Status 201 if successfully created.

```json
{
	"slide": {
			"id": "a3bcef codb9-95a9-456b-a3d6-5508273adf32",
			"image": "https://oaidalleapiprodscus.blob.core.windows.net/…",
			"text": "Wednesday… the best day"
		}
	,
	"text": "Wednesday… the best day"
}
```

Status 400 if already exists.

```json
{

"error": "text already exists."

}
```