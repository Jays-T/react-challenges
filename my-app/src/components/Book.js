import React from 'react'
import css from './css/Books.module.css';

function Book(props) {
    const book = props.book
    const {title, author, pages} = book;

    return (
        <div className = {css.books}>
            <h5>{title}</h5>
            <p><span>Author:</span> {author}</p>
            <p><span>Pages:</span> {pages}</p>
        </div>
    )
}

export default Book
