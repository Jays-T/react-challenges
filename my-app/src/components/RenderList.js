import React from 'react'
import Book from './Book';
import {bookList, books} from './data/BooksArray.js'
import css from './css/Books.module.css';

export default function RenderList() {

    return (
        <div className = {css.booksContainer}>
            <h3>My Favorite Books</h3>
            {
                books.map(book => {
                    const {title} = book;
                    return <Book key={title} book={book} />
                })
            }
        </div>
    )
}
