import React from "react";
import "./BookList.css";
import BookCardBestSellers from "./BookCard";

function BookList({ book }) {
  return (
    <div className="BookList">
      <h1>Row of Best Sellers</h1>
      {/* making a row of books with previews */}
      <BookCardBestSellers book={book} />

      {/* books imported */}

      <h1>Best Sellers</h1>
      <div>
        {book.map((item) => (
          <img src={item.photo} alt={item.name} />
        ))}
      </div>
    </div>
  );
}

export default BookList;
