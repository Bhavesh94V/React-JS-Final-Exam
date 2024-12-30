import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Deletemovie, Editmovie, FetchMovies } from './Redux/Actions'; 
import { addmovie } from './Redux/Actions'; 


export default function MovieDetails() {
  const dispatch = useDispatch();
  const [Movie, setMovie] = useState({ movie: '', Rate: '', url: '' });

  useEffect(() => {
    dispatch(FetchMovies());
  }, [dispatch]);

  const posts = useSelector((state) => state.posts);

  if (!posts) {
    return <div>Loading...</div>;
  }

  function AddMovie() {
    if (Movie.movie && Movie.Rate && Movie.url) {
      dispatch(addmovie(Movie));
      setMovie({ movie: '', Rate: '', url: '' });
      alert('Movie added successfully!');
    } else {
      alert('Please fill in all fields.');
    }
  }

  const handleEdit = (post) => {
    const newName = prompt('Enter new name:', post.movie);
    const newRate = prompt('Enter new Rate number:', post.Rate);
    const newImg = prompt('Enter new image Url:', post.url);

    if (newName && newRate && newImg) {
      const updatedMovie = { ...post, movie: newName, Rate: newRate, url: newImg };
      dispatch(Editmovie(post.id, updatedMovie));
      alert('movie updated successfully!');
    } else {
      alert('Both fields are required to update the movie.');
    }
  };

  return (
    <>
      <div className='bg-gray w-50 d-flex flex-column gap-2 mx-auto ps-5 mt-5'>
        <input type="text" className='w-75' placeholder='Enter movie Name' onChange={(e) => setMovie({ ...Movie, movie: e.target.value })} />
        <input type="text" className='w-75' placeholder='Enter Movie Rating' onChange={(e) => setMovie({ ...Movie, Rate: e.target.value })} />
        <input type="text" className='w-75' placeholder='Enter Movie Pic URL' onChange={(e) => setMovie({ ...Movie, url: e.target.value })} />
        <button className='w-75' onClick={AddMovie}>Add Movie</button>
      </div>

      <ul className='mx-auto listed d-flex flex-row px-5 mt-3 gap-2'>
        {
          posts.map((post, index) => (
            <li key={index} className='list-i p-1 d-flex flex-column justify-content-around align-items-center bg-dark text-light rounded-2 max-w-[100px]'>
              <img src={post.url} className='h-50 w-50' alt="" />
              <h2>{post.movie}</h2>
              <h4 className='bg-secondary w-50 py-2 rounded-2 text-light'>Ratings <span>{post.Rate}</span></h4>
              <button className='w-25 px-2 py-1 bg-danger border-0 text-light rounded-2' onClick={() => dispatch(Deletemovie(post.id))}>Delete</button>
              <button className='w-25 px-2 py-1 bg-primary border-0 text-light rounded-2' onClick={() => handleEdit(post)}>Edit</button>
            </li>
          ))
        }
      </ul>
    </>
  );
}
