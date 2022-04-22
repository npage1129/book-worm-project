import React from "react";
import "./BookList.css";
import BookCardBestSellers from "./BookCard";

function BookList({ book }) {
  const bestsellers = book.filter((item) => item.rating === 5);


  const firstages = book.filter((book) => book.age_range <= 5);
  console.log(book + "hi this is for best sellers");



  const finalstages = book.filter(
    (book) => book.age_range >= 5 && book.age_range <= 10
  );
  console.log(firstages + "hi this is for first age books ");

  return (
    <div className="container">
      <h1>Best Sellers</h1>

      {/* making a row of books with previews */}

      <BookCardBestSellers book={bestsellers} />

      {/* books imported */}

      <h1> Book Ages 1-5 </h1>
      <BookCardBestSellers book={firstages} />
      <h1>Book Ages 5-10 </h1>
      <BookCardBestSellers book={finalstages} />
    </div>
  );
}

export default BookList;
