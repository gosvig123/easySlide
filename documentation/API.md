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

## `POST /openimage/:id/slides/:slideId` – Create an image

**Request**

```json
{
  "prompt": "A cute baby sea otter",
  "n": 1,
  "size": "1024x1024"
}
```

**Response**

Status 201 if successfully created.

```json
{
  "id": "e020be5c-cc21-438b-afd9-3434f4382d8d",
  "text": "My days are always the best... fridays with a beer not bad mondays sucks",
  "image": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-w7icyCdNYkm68pUr8S7XOB9V/user-UftvPBSZNnOK6GYuzQDSOeHt/img-ZEtqyaNsHXrJ9i2mJO44gv7L.png?st=2022-12-14T08%3A33%3A27Z&se=2022-12-14T10%3A33%3A27Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-12-14T05%3A29%3A30Z&ske=2022-12-15T05%3A29%3A30Z&sks=b&skv=2021-08-06&sig=jfgcb%2BPASDgW7kXBnH8Vl7ghmZ0QsLWK/eVhgDEq93g%3D",
  "presentationid": 1
}
```

Status 400 if already exists:

```json
{
  "error": "Image already exists."
}
```

## `POST /opentext/:id/slides/:slideId` - Create a text

**Request**

```json
{
  "searchQuery": "A cute baby sea otter",
  "textLength": 5
}
```

**Response**

Status 201 if successfully created.

```json
{
  "id": "e020be5c-cc21-438b-afd9-3434f4382d8d",
  "text": "The story of the man who has lived in a tree for 25 years is one",
  "image": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-w7icyCdNYkm68pUr8S7XOB9V/user-UftvPBSZNnOK6GYuzQDSOeHt/img-ZEtqyaNsHXrJ9i2mJO44gv7L.png?st=2022-12-14T08%3A33%3A27Z&se=2022-12-14T10%3A33%3A27Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-12-14T05%3A29%3A30Z&ske=2022-12-15T05%3A29%3A30Z&sks=b&skv=2021-08-06&sig=jfgcb%2BPASDgW7kXBnH8Vl7ghmZ0QsLWK/eVhgDEq93g%3D",
  "presentationid": 1
}
```

Status 400 if already exists.

````json
{
  "error": "text already exists."
}

**OLD VERSION**

// <!-- ```
// ## `POST /openimage` - sending back the generated image as per requested

// ```json
// {
//   "prompt": "A cute baby sea otter",
//   "n": 1,
//   "size": "1024x1024"
// }

// ## `POST /opentext` - sending back the generated text as per requested

// ```json
// {
//   "searchQuery": "A cute baby sea otter",
//   "textLength": 5,
// } -->
````
