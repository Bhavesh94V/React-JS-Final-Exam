import axios from 'axios';
const Api = 'http://localhost:3000/movies';

export const FetchMovies = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(Api);
            dispatch({
                type: 'fetch_movie', payload: response.data
            });
        } catch {
            console.log("error in fetching");
        }
    };
};

export const addmovie = (movie) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(Api, movie);
            dispatch({
                type: 'addmovie', payload: response.data
            });
        } catch {
            console.log("Error in Add movie");
        }
    };
};

export const Deletemovie = (movieId) => {
    return async (dispatch) => {
        try {
            const response = await axios.delete(`${Api}/${movieId}`);
            dispatch({
                type: 'Deletemovie', payload: movieId
            });
        } catch {
            console.log("Error in Delete movie");
        }
    };
};

export const Editmovie = (movieId, MovieData) => {
    return async (dispatch) => {
        try {
            const response = await axios.put(`${Api}/${movieId}`, MovieData);
            dispatch({
                type: 'Editmovie', payload: response.data
            });
        } catch {
            console.log("Error in Edit movie");
        }
    };
};
