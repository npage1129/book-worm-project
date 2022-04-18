import React from 'react';
import'./BookList.css';
import BookCardBestSellers from './BookCardBestSellers'

function BookList(){
    return(
        <div className ="BookList">
            <BookCardBestSellers />
        </div>
    )

}

export default BookList;