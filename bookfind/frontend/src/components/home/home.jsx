import "./home.css";
import NavBar from "../navBar/navBar";
import Header from "../header/Header.jsx";
import Featured from "../featured/Featured";
import { useEffect, useState } from "react";
import axios from "axios";
function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch books from the API
    fetchBooks();
  }, []);
  const fetchBooks = async () => { 
    try {
      const response = await axios.get(
        "http://localhost:5001/api/books/featured"
      );
      console.log(response.data)
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  return (
    <div>
      <NavBar />
      <Header />
      <div className="homeContainer">
    
        <Featured books={books} />
       
      </div>
    </div>
  );
}

export default Home;
