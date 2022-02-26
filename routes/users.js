const express = require('express');
const { v4 } = require('uuid');
const router = express.Router();
const User = require('../models/user')

//all routes start with users
router.get('/', async (req,res)=>{
    try {
        const users = await User.find()
        res.json({users})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Server Error"})
    }
});

router.post('/', async (req,res)=>{
    try {
        const user = req.body;
        const userID =  v4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
        const userwithID = { ...user, id:userID}

        const newUser = new User(userwithID)
        const savedUser = await newUser.save()
        
        res.json({message: savedUser.name});

    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Server Error"})
    }

});

router.get('/:id', (req,res)=>{
    const id = req.params;
    const foundUser = users.find((user)=> user.id == id)

    res.send(foundUser)
});

router.delete('/:id', (req,res)=>{
    const {id} = req.params;
    users = users.filter((user)=> user.id != id)

    res.send(`${id} deleted succesfully`)
});

router.patch('/:id', (req,res)=>{
    const {id} = req.params;
    const {name, email,city, age} = req.body;
    const user = users.find((user)=> user.id == id)

    if(name){
        user.name = name;
    }
    if(email){
        user.email = email;
    }
    if(city){
        user.city = city;
    }
    if(age){
        user.age = age;
    }
    res.send(`User with id : ${id} updated`);
 
});


module.exports = router;