import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const BookList = () => {

    const { books, deleteBook } = useContext(BookContext);

    return (
        <div className='section section-books'>
            <div className='container'>
                <h6>Books</h6>
                <ul>
                    {books.map(book => (
                        <li key={book.id}>
                            <div className='card book'>
                                <div className='book-image'>
                                    <img alt="book thum"/>
                                </div>
                                <div className='book-details'>
                                    <div className='book-title'>{book.title}</div>
                                    <div className='book-author'>{book.author}</div>
                                </div>
                                <div onClick={() => deleteBook(book.id)}
                                     className='book-delete'>
                                    <i className='material-icons'>delete</i>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default BookList;
