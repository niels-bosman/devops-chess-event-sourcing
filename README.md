# Chess Event Sourcing

## How to run
```bash
docker-compose up -d
npm i
npm run dev
```

## How to test
Make a post request to:
```bash
http://localhost:5002/chess
```

With the following body:

```json
{
  "piece": "Rook",
  "move": "e5"
}
```
