const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const {readUsers , writeUsers } = require('../utils/fileHelpers');

router.post('/register', async (req , res) =>
{
    try 
    {
        const email = req.body.email;
        const password = req.body.password;

        if(!email || !password)
        {return res.status(400).json({message : 'Email and password are required' });}

        const users = readUsers();
        const existingUser = users.find(user => user.email ===email);

        if(existingUser)
        {return res.status(400).json({message : 'User already exists'});}

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password , saltRounds);

        const newUser = {id : users.length +1 , email: email , password : hashedPassword }

        users.push(newUser);
        writeUsers(users);

        res.status(201).json
        ({
            message : 'User registered succesfully',User:{ email: newUser.email , id: newUser.id}
        });

    } catch (error) 
    {
        res.status(500).json({message: 'Server error',error: error.message});
    }
})


    const jwt = require('jsonwebtoken');
    const JWT_SECRET = 'Top-Secret';

    router.post('/login',async (req , res) =>
    {
        try 
        {
            const email = req.body.email;
            const password = req.body.password;

            if(!email || !password)
            {return res.status(400).json({message: 'Email and password are required'});}

            const users =  readUsers();
            const user = users.find (u => u.email === email);

            if(!user)
            {
                return res.status(401).json({message : 'Invalid credentials'});
            }

            const isPasswordValid = await bcrypt.compare(password , user.password);

            if(!isPasswordValid)
            {
                return res.status(401).json({message : 'Invalid credentials'});
            }

            const token = jwt.sign(
                {userId : user.id, email: user.email},
                JWT_SECRET,
                {expiresIn: '24h'});

                res.json({
                    message: 'Log in succesfull',
                    token,
                    user: {id : user.id, email : user.email}
                });

        } catch (error) 
        {
            res.status(500).json({message:'Server error', error: error.message});
        }



    });

    const authenticateToken = require('../middleware/auth');

    router.get('/profile' , authenticateToken, (req , res)=> 
    {
        res.json({
            message : 'this is a protected route',
            user : req.user
        });
    });


module.exports = router;