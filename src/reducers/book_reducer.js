export default {
    'setBooks': (state, action) => {
        return { ...state, user: action.books }
    },
    'deleteBook': (state, action) => { },
}