import React, { useState, useEffect } from "react";
import "./BookList.css";
import Comments from "./Comments";

function BookCardBestSellers({ book }) {
  const [content, setContent] = useState("");

  console.log(book);

  return (
    <div>
      <div className="container">
        {book.map((item) => (
          <div className="card">
            <img className="item" src={item.photo} alt="" />
            <br />
            <br />
            <div className="hidden_at_first">
              <h2>Title: "{item.title}"</h2>
              <br />
              <strong>
                <i>Author: {item.author}</i>
              </strong>
              <br />
              <p>Genre: {item.genre}</p>
              <p>Book Rating: {item.rating} </p>
              <a href={item.link} target="_blank">
                Purchase Here
              </a>
              <br />

              <br />

              <p>Comments: </p>
              <Comments content={content} item={item} setContent={setContent} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default BookCardBestSellers;
