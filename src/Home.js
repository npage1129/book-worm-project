import React from 'react';
import Header from './base/Header.js';
import Footer from './base/Footer.js';
import BookList from  './BookList';
import './Home.css';

function Home(){
    return(
        <div className ="Home">
            <Header />
            <BookList />
            <Footer />
        </div>
    )
}
export default Home;