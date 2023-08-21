import React from 'react'
import "./featured.css"
import  { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material"
export const Featured = (props) => {
  return (
   
<div className="featured">
<h1>Featured</h1>

<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
{props.books.map((book) => (
  <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card key={book.Id} sx={{ maxWidth: "100%", height: "100%" }}>
                <CardActionArea sx={{ height: "100%" }}>
                  <CardMedia
                    component="img"
                    height="100" // Adjust the height to your desired value
                    width="100%" // Ensure the image fills the entire CardMedia component
                    image={book.img}
                    alt="Book cover"
                  />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {book.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {book.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        edit
        </Button>
        <Button size="small" color="primary">
        delete
        </Button>
      </CardActions>
    </Card>

</Grid>

))}
</Grid>

</div>
  )
}


export default Featured