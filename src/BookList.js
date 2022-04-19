import React from 'react';
import'./BookList.css';
import Data from './data';
import BookCardBestSellers from './BookCard';
import { Carousel } from 'react-responsive-carousel';

function BookList(){
    return(
        <>
        <div>
            <h3 className="Best Sellers">Best Sellers</h3>
        </div>
            
            <div className="Books">
            <Carousel >
<BookCardBestSellers
            name={Data[0].name}  
            imgs={Data[0].image}
            link={Data[0].link}
            />
<BookCardBestSellers
            name={Data[1].name}
            imgs={Data[1].image}
            link={Data[1].link}
            />
<BookCardBestSellers
            name={Data[3].name}
            imgs={Data[3].image}
            link={Data[3].link}
            />
<BookCardBestSellers
            name={Data[4].name}
            imgs={Data[4].image}
            link={Data[4].link}
            />
            
            <BookCardBestSellers
            name={Data[5].name}
            imgs={Data[5].image}
            link={Data[5].link}
            />
<BookCardBestSellers
            name={Data[6].name}
            imgs={Data[6].image}
            link={Data[6].link}
            />
            
                
            <BookCardBestSellers
            name={Data[7].name}
            imgs={Data[7].image}
            link={Data[7].link}
            />
            <BookCardBestSellers
            name={Data[8].name}
            imgs={Data[8].image}
            link={Data[8].link}
            />
            <BookCardBestSellers
            name={Data[9].name}
            imgs={Data[9].image}
            link={Data[9].link}
            />
            <BookCardBestSellers
            nBookCardBestSellers
            name={Data[12].name}
            imgs={Data[12].image}
            link={Data[12].link}
            />
</Carousel>
            </div>
</>
);
}

export default BookList;