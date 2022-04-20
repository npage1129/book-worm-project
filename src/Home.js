import React, {useState, useEffect} from "react";
import Header from "./base/Header.js";
import Footer from "./base/Footer.js";
import BookList from "./BookList";
import "./Home.css";

const [book, setBook] = useState([])
useEffect(()=> {
  fetch(``)
      .then((resp) => resp.json())
      .then((data) => setBook(data.drinks))
},[])

function Home() {
  return (
    <div className="Home">
      <Header />
      <BookList />
      <Footer />
    </div>
  );
}
export default Home;
