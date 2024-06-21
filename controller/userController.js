let users = require('../Data/data');

function getUser (req, res) {
    let id = req.query.id;
    if(id) {
        console.log(users)
        let user = users.find((u) => u.id == id);
        if(user) {
        res.send(user);
        } else {
            console.log("user can not found");
        }
    } else {
        res.send(users);
    }
}

function addUser(req, res) {
    let user = req.body;
    let id = users.length + 1;
    if (user) {
        user = {id: id, ...user};
        users.push(user);
        res.send(users);
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