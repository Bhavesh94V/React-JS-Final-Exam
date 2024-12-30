import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Moviesearch() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('rate');

    useEffect(() => {
        axios.get('http://localhost:3000/movies')
            .then((response) => {
                setMovies(response.data);
            })
            .catch((error) => {
                console.log("Error fetching movies", error);
            });
    }, []);

    const filteredMovies = movies.filter((movie) =>
        movie.movie.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedMovies = filteredMovies.sort((a, b) => {
        if (sortOption === 'rate') {
            return parseFloat(b.Rate) - parseFloat(a.Rate);
        } else if (sortOption === 'name') {
            return a.movie.localeCompare(b.movie);
        }
        return 0;
    });

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between mb-4">
                <input
                    type="text"
                    placeholder="Search for a movie..."
                    className="form-control w-50"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select
                    className="form-select w-25"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                >
                    <option value="rate">Sort by Rating</option>
                    <option value="name">Sort by Name</option>
                </select>
            </div>

            <ul className="movielists list-group mt-3">
                {
                    sortedMovies.length > 0 ? (
                        sortedMovies.map((movie, id) => (
                            <li key={id} className="list-group-item d-flex align-items-center justify-content-between p-3 mb-2 rounded-3 shadow-sm">
                                <div className="d-flex align-items-center">
                                    <img src={movie.url} alt={movie.movie} className="rounded-5" width="50" />
                                    <h4 className="ms-3">{movie.movie}</h4>
                                </div>
                                <button className="btn btn-outline-primary">{movie.Rate} Ratings</button>
                            </li>
                        ))
                    ) : (
                        <li className="list-group-item">No movies found</li>
                    )
                }
            </ul>
        </div>
    );
}
