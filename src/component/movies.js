import React, { useEffect, useContext } from 'react';
import ajax from '../ajax';
import Context from '../Context';

function Movies() {
    const { state, dispatch } = useContext(Context);
    useEffect(() => {
        ajax('/movies').then((movies) => {
            dispatch({ type: "setMovies", movies })
        })
    }, []);
    return (
        <div>
            <h1>电影</h1>
            <ol>
                {state.movies
                    ? state.movies.map(movie => <li key={movie.id}>{movie.name}</li>)
                    : "加载中"}
            </ol>
        </div>
    )
}
export default Movies