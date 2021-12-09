import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import Context from './Context';
import User from './component/user';
import Books from './component/books';
import Movies from './component/movies';
import user_reducer from './reducers/user_reducer';
import book_reducer from './reducers/book_reducer';
import movies_reducer from './reducers/movies_reducer';
const store = {
  user: null,
  books: null,
  movies: null
}
const obj = {
  ...user_reducer,
  ...book_reducer,
  ...movies_reducer
}
function reducer(state, action) {
  const fn = obj[action.type]
  if (fn) {
    return fn(state, action)
  } else {
    throw new Error('Error');
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, store)
  return (
    <Context.Provider value={{ state, dispatch }}>
      <User />
      <hr />
      <Books />
      <Movies />
    </Context.Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

