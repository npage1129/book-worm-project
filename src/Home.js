import React, { useState, useEffect } from "react";
import Header from "./base/Header.js";
import Footer from "./base/Footer.js";
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
    <div className="Home">
      <Header />
      <BookList book={book} />
      <Footer />
    </div>
  );
}

export default Home;
