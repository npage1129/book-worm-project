import React, { useState, useEffect } from "react";
import Header from "./base/Header.js";
import Footer from "./base/Footer.js";
import BookList from "./BookList";
import "./Home.css";

function Home() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    fetch("https://localhost:9292/books")
      .then((resp) => resp.json())
      .then((data) => console.log(data.books));
  }, []);

  return (
    <div className="Home">
      <Header />
      <BookList />
      <Footer />
    </div>
  );
}
export default Home;
