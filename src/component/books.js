import React, { useEffect, useContext } from 'react';
import ajax from '../ajax';
import Context from '../Context';

function Books() {
    const { state, dispatch } = useContext(Context)
    useEffect(() => {
        ajax('/books').then((books) => {
            dispatch({ type: "setBooks", books })
        })
    }, [])
    return (
        <div>
            <h1>我的书籍</h1>
            <div>{state.books ?
                state.books.map(book => (
                    <li key={book.id}>{book.name}</li>
                )) : "加载中"}</div>
        </div>
    )
}
export default Books