import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Movielist() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/movies')
      .then((response) => {
        setMovies(response.data);
      }).catch((error) => {
        console.log("Error fetching movies", error);
      });
  }, []);

  return (
    <div>
      <ul className='movielists mt-3'>
        {
          movies.map((movie, index) => (
            <li key={index} className='d-flex align-items-center justify-content-around p-2 rounded-2 mt-1'>
              <img src={movie.url} className='rounded-5' alt="" />
              <h4>{movie.movie}</h4>
              <button className='px-4 rounded-2 border-0'>{movie.Rate} Ratings</button>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
