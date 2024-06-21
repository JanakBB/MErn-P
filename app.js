const express = require('express');
const userRouter = require('./router/userRouter');
const postRouter = require("./router/postRouter");
const logger = require("./middleWare/logger");
const errorHanndlor = require("./middleWare/errorMiddleWare");

const app = express();

app.use(express.json());

// app.use("/login", (req, res) => {
//     res.send("hello world");
// })

app.use("/api/user", logger, userRouter);
app.use("/api/post", postRouter);
app.use(express.static("public"));

app.use(errorHanndlor);

app.listen(3500, () => {
    console.log("Server 3500 is running...");
});