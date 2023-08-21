import { Button, TextField } from "@mui/material";

import Header from "../header/Header";
import NavBar from "../navBar/navBar";
import { useForm } from "../useForm";
import "./addUser.css";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";


function AddUser() {
  const { formValues, setFormValues, handleChange, handleReset,herokuURL } = useForm({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formValues);
    try {
      const response = await axios.post(
        `${herokuURL}/users/user`,
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
      <div className="addUserContainer">
      <h1> Register here </h1>
        <form className="classesform" onSubmit={handleSubmit}>
          <TextField
            name="name"
            label="name"
            value={formValues.name}
            onChange={handleChange}
          />
          <TextField
            name="email"
            label="email"
            value={formValues.email}
            onChange={handleChange}
          />
          <TextField
            name="password"
            label="password"
            value={formValues.password}
            onChange={handleChange}
          />
          <div className="formbuttons">
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
            <Button
              onclick={handleReset}
              type="reset"
              variant="contained"
              color="primary"
            >
              Reset
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AddUser;
