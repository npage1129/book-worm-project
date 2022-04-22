import React, { useState, useEffect } from "react";
import BookList from "./BookList";
import "./Home.css";


function Home() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:9292/books`)
      .then((resp) => resp.json())
      .then((data) => setBook(data));
  }, []);

  return (
    <div className="home">
      <BookList book={book} />
    </div>
  );
}

export default Home;
