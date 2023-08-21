const router = require("express").Router();
const Book = require("../model/book");

router.post("/book", async (req, res) => {
  const newBook = new Book({
    id: req.body.id,
    title: req.body.title,
    author: req.body.author,
    publicationYear: req.body.publicationYear,
    genre: req.body.genre,
    description: req.body.description,
    isFeatured: req.body.isFeatured,
    img : req.body.img
  });
  const savedBook = await newBook.save();
  res.status(200).json(savedBook);
});

router.get("/book/:id", async (req, res) => {
  try {
    console.log(req.params);
    const findBook = await Book.findOne({ _id: req.params.id });
    res.status(200).json(findBook);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/featured", async (req, res) => {
  try {
    console.log(req.params);
    const featuredBook = await Book.find({ isFeatured: "true" });
    res.status(200).json(featuredBook);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/bookList", async (req, res) => {
  try {
    const findBook = await Book.find();
    res.status(200).json(findBook);
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete

router.delete("/book/:id", async (req, res) => {
  try {
    console.log(req.params);
    await Book.findOneAndRemove({ _id: req.params.id });
    
    res.status(200).json("The book has been deleted!");
  } catch (err) {
    res.status(500);
  }
});

router.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id
    console.log('update',id)
    const updatedBook = await Book.findOneAndUpdate({ _id : id }, req.body,{new : true} );
    
    res.status(200).json(updatedBook);
  } catch (err) {
    res.status(500).json(err);
  }

});

module.exports = router;
