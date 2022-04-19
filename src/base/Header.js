import React from 'react';
import './Header.css';

function Header (){

    return(
        <div className = "Header">
            <nav className="navBar"> 
                <a className ='navLink' href="./Home">Home<br></br></a> 
                <a className ='navLink' href="./Ages">Ages<br></br></a>
                <a className ='navLink' href="./BestSellerTab">Best Sellers<br></br></a>
            </nav>
        </div>
    );
}

export default Header;

