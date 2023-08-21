import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useForm } from "../useForm";
import NavBar from "../navBar/navBar";
import Header from "../header/Header";
import "./bookItem.css";

import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

function BookItem() {
  const { formValues, setFormValues, handleChange, handleReset, herokuURL } = useForm({
    id: "",
    title: "",
    author: "",
    publicationYear: "",
    genre: "",
    description: "",
    img: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  const fetch = () => {
    fetchBookById();
  };

  const fetchBookById = async () => {
    try {
      const response = await axios.get(
        `${herokuURL}/books/book/${id}`
      );
      console.log("data", response.data);
      setFormValues(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(fetch, []);
  return (
    <div>
      <NavBar />
      <Header />
      <div className="bookItemContainer">
        <h1> Book Item </h1>
        <div className="bookItem">
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card
                key={formValues.Id}
                sx={{ maxWidth: "100%", height: "100%" }}
              >
                <CardActionArea sx={{ height: "100%" }}>
                  <CardMedia
                    component="img"
                    height="100%" // Adjust the height to your desired value
                    width="100%" // Ensure the image fills the entire CardMedia component
                    image={formValues.img}
                    alt="Book cover"
                  />
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={8} lg={5}>
              <Card
                key={formValues.id}
                sx={{ maxWidth: "100%", height: "100%" }}
              >
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div">
                    {formValues.title}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    <span>ISBN: </span>
                    {formValues.id}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    <span>Author:</span> {formValues.author}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    <span>Genre: </span> {formValues.genre}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    <span>Publication Year: </span> {formValues.publicationYear}
                  </Typography>
                  <b>Description: </b>{" "}
                  <Typography variant="body2" color="text.primary">
                    {formValues.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
export default BookItem;
