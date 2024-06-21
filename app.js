const express = require('express');
const userRouter = require('./router/userRouter');

const app = express();

app.use(express.json());

// app.use("/login", (req, res) => {
//     res.send("hello world");
// })

app.use("/api/user", userRouter);

app.listen(3500, () => {
    console.log("Server 3500 is running...");
});