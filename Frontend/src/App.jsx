import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
      .then(response => {
        setJokes(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      }); // Fetch data from the API and log it to the console
  }, []);

  return (
    <>
      <h1>Jokes</h1>
      <p>Number of jokes: {jokes.length}</p>

      {jokes.map(req => (
        <div key={req.id}>
          <p>ID: {req.id}</p>
          <p>Joke: {req.joke}</p>
        </div>
      ))}
    </>
  );
}

export default App;
