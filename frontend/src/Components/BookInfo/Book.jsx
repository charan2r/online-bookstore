import React from 'react';
import BookInfo from './BookInfo'; 
import Navbar from '../../Components/NavBar/Navbar';

// Sample book details

const Book = () => {
    // Sample book object
    const book = {
        title: "Book Title",
        author: "Author Name",
        price: 2000,
        isbn: "1234567890",
        publisher: "Publisher Name",
        inStock: true,
        quantity: 10,
        otherPublications: [
            // {
            //     id: 1,
            //     imageUrl: "image-url",
            //     title: "Other Book Title",
            //     author: "Other Author",
            //     price: 2500
            // },
            // {
            //     id: 2,
            //     imageUrl: "image-url",
            //     title: "Other Book Title",
            //     author: "Other Author",
            //     price: 250
            // },
            // {
            //     id: 2,
            //     imageUrl: "image-url",
            //     title: "Other Book Title",
            //     author: "Other Author",
            //     price: 350
            // },
            // add more other publications 
        ]
    };

    return (
        <div>
            <Navbar/>
            <BookInfo book={book} />
        </div>
    );
};

export default Book;
