import { useNavigate } from "react-router-dom";
import { useForm } from "../useForm";
import axios from "axios";
import NavBar from "../navBar/navBar";
import Header from "../header/Header";
import { Button, TextField } from "@mui/material";
import ("./signIn.css");



function SignIn () {
    const { formValues, setFormValues, handleChange, handleReset } = useForm({
     
      email: "",
      password: "",
    });
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(formValues);
      try {
        const response = await axios.post(
          "http://localhost:5001/api/users/user",
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
        <div className="signInContainer">
        <h1> Sign in </h1>
          <form className="classesform" onSubmit={handleSubmit}>
           
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
            <div className="signInFormbuttons">
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
  export default SignIn;
  