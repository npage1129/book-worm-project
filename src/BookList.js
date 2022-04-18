import React from 'react';
import BookCard from './BookCard';
import'./BookList.css';


function BookList(){
    return(
        <div className ="BookList">
            <BookCard />
        </div>
    )

}

export default BookList;