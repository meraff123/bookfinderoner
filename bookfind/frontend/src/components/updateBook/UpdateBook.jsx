import axios from 'axios';
import React, { useEffect } from 'react'
import NavBar from '../navBar/navBar';
import Header from '../header/Header';
import { Button, TextField } from '@mui/material';
import { useForm } from '../useForm';
import "./updatBook.css";
import { useNavigate, useParams } from 'react-router-dom';

export const UpdateBook = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const { formValues, setFormValues, handleChange,handleReset } = useForm({
    id: "",
    title: "",
    author: "",
    publicationYear: "",
    genre: "",
    description: "",
    img: "",
  });
  
  useEffect(() => {
    // Fetch books from the API
    fetchBookById();
  }, []);
  const fetchBookById = async () => {
    try {
     
      const response = await axios.get(
        `http://localhost:5001/api/books/book/${id}`
      );
      console.log("data",response.data);
      setFormValues(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formValues);
    try {
      const response = await axios.patch(
        `http://localhost:5001/api/books/update/${id}`,
        formValues
      );
      alert("successfully saved");
      navigate("/books")
      
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };
  return (
    <div>
      <NavBar />
      <Header type="list" />
      <div className="updateBookContainer">
        <h1> Update Book Detail </h1>
        <form className="updateClassesform" onSubmit={handleSubmit}>
          <TextField
            name="id"
            label="id"
            value={formValues.id}
            onChange={handleChange}
          />
          <TextField
            name="title"
            label="title"
            value={formValues.title}
            onChange={handleChange}
          />
          <TextField
            name="author"
            label="Author"
            value={formValues.author}
            onChange={handleChange}
          />
          <TextField
            name="publicationYear"
            label="Publication Year"
            value={formValues.publicationYear}
            onChange={handleChange}
          />

          <TextField
            name="genre"
            label="Genre"
            value={formValues.genre}
            onChange={handleChange}
          />
          <TextField
            name="description"
            label="Description"
            multiline
            rows={4}
            value={formValues.description}
            onChange={handleChange}
          />
          <TextField
            name="img"
            label="image url"
            value={formValues.img}
            onChange={handleChange}
          />
          <div className="updateformButtons">
            <Button type="submit" variant="contained" color="primary">
              update
            </Button>
            <Button onClick={handleReset} type="reset" variant="contained" color="primary">
            Reset
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
