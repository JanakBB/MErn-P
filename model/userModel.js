const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    age: Number,
    isAdmin: Boolean
});

module.exports = mongoose.model("User", userSchema);

// const User = mongoose.model("User", userSchema);
// module.exports = User;

// module.exports = mongoose.model("User", new mongoose.Schema({
//     username: String,
//     password: String,
//     age: Number,
//     isAdmin: Boolean
// }));
