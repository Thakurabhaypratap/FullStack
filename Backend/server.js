import express from 'express';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/api/jokes', (req, res) => {
  const jokes = [
    {
      id: 1,
      joke: 'joke1',
    },
    {
      id: 2,
      joke: 'joke2',
    },
    {
      id: 3,
      joke: 'joke3',
    },
    {
      id: 4,
      joke: 'joke4',
    },
    // Add more jokes here...
  ];

  res.json(jokes); // Use res.json to send the array as a JSON response
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
