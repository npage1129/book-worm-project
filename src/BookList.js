import React from 'react';
import BookCard from './BookCardBestSellers';
import'./BookList.css';


function BookList(){
    return(
        <div className ="BookList">
            <BookCard />
        </div>
    )

}

export default BookList;