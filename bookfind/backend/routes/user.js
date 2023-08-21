const router = require("express").Router();
const User = require("../model/user");

router.post("/user", async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const savedUserData = await newUser.save();
    res.status(200).json(savedUserData);

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/users", async (req, res) => {
  try {
    const getAllUsers = await User.find({});
    res.status(200).json(getAllUsers);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/search", async (req, res) => {
  try {
    const id = req.query.id
    console.log(id)
    const getAllUsers = await User.find({ _id : id });
    
    res.status(200).json(getAllUsers);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/deleteById", async (req, res) => {
  try {
    const id = req.query.id
    console.log(id)
    const getAllUsers = await User.findOneAndDelete({ _id : id });
    
    res.status(200).json(getAllUsers);
  } catch (err) {
    res.status(500).json(err);
  }
});

//for uri param ex=/update/123 we have to give a variable (:id)

router.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id
    console.log(id)
    const getAllUsers = await User.findOneAndUpdate({ _id : id }, req.body,{new : true} );
    
    res.status(200).json(getAllUsers);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
