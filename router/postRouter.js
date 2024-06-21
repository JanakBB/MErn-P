const express = require('express');
let {postUser, addPostUser} = require("../controller/postController");

const router = express.Router();

router.get("/getpost", postUser);

router.post("/addpost", addPostUser);

module.exports = router;