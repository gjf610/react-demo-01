export default {
    'setMovies': (state, action) => {
        return { ...state, user: action.movies }
    },
    'deleteMovie': (state, action) => { },
}