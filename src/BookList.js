import React from 'react';
import'./BookList.css';
import Data from './data';
import BookCardBestSellers from './BookCard';
import { Carousel } from 'react-responsive-carousel';

function BookList(){
    return(
        <div class="row">
        <h2>NETFLIX ORGINALS</h2>
        <div className="row__posters_1">
        <h3>Best Sellers</h3>
        <img src = "https://image.tmdb.org/t/p/original//yxMpoHO0CXP5o9gB7IfsciilQS4.jpg" />
        </div>
        </div>
    
    )
}

export default BookList;