import { Button, TextField } from "@mui/material";

import Header from "../header/Header";
import NavBar from "../navBar/navBar";
import "./addBook.css";
import { useForm } from "../useForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const navigate = useNavigate();
  const { formValues, setFormValues, handleChange,handleReset, herokuURL } = useForm({
    id: "",
    title: "",
    author: "",
    publicationYear: "",
    genre: "",
    description: "",
    img: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formValues);
    try {
      const response = await axios.post(
        `${herokuURL}/books/book`,
        formValues
      );
      alert("successfully saved");
      navigate("/books")

    } catch (error) {
      console.error("Error creating book:", error);
    }
  };
  return (
    <div>
      <NavBar />
      <Header type="list" />
      <div className="addBookContainer">
        <h1> Add Book Detail </h1>
        <form className="classesform" onSubmit={handleSubmit}>
          <TextField
            name="id"
            label="ISBN"
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
          <div className="formButtons">
            <Button type="submit" variant="contained" color="primary">
              Submit
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
export default AddBook;
