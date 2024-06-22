const User = require("../model/userModel");

async function getUser (req, res, next) {
   try{
    let id = req.query.id;
    if(id) {
        let user = await User.findById(id);
        if(user) {
        res.send(user);
        } else {
            let err = new Error(`User with id ${id} not found`);
            next(err);
        }
    } else {
        let users = await User.find();
        res.send(users);
    }
   } catch (err) {
    next(err);
   }
}

async function addUser(req, res, next) {
   try{
    let user = req.body;
    let addedUser = await User.create(user);
    res.send({message: `User with id ${addedUser._id} have been added`})
   } catch (err) {
    next(err);
   }
}

function updateUser(req, res) {
    let id = req.params.id;
    console.log(id);
    if(id) {
        let user = users.find((u) => u.id == id);
        if(user){
            user = {...user, ...req.body};
            users = users.filter((u) => u.id != id);
            users.push(user);
            res.send(users);
        } else {
            res.status(404).send(`User update id ${id} is not Found`);
        }

    } else {
        res.send(users);
    }
}

function deleteUser(req, res) {
    let id = req.params.id;
    if (id) {
        users = users.filter((u) => u.id != id);
        res.send(users);
        console.log(`User id ${id} is removed from data`)
    }
}

module.exports = {getUser, addUser, updateUser, deleteUser};