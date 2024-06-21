const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./router/userRouter');
const postRouter = require("./router/postRouter");
const logger = require("./middleWare/logger");
const errorHanndlor = require("./middleWare/errorMiddleWare");

const app = express();

// connect mongodb
(async() => {
    try {
        let connection = await mongoose.connect("mongodb://localhost:27017/Batch2");
    console.log(`connecting mongodb at ${connection.connection.host}`);
    app.listen(3500, () => console.log('Server is up and running'));
    } catch (err) {
        console.log("Error connect at", err.message);
        process.exit(1);
    }
})();


app.use(express.json());

// app.use("/login", (req, res) => {
//     res.send("hello world");
// })

app.use("/api/user", logger, userRouter);
app.use("/api/post", postRouter);
app.use(express.static("public"));

app.use(errorHanndlor);

