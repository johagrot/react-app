const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');

// Connection URI for MongoDB (replace with your actual connection string)
const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);

// Connect to MongoDB
client.connect((err) => {
    if (err) {
        console.error('Error connecting to MongoDB:', err);
        return;
    }
    console.log('Connected to MongoDB');

    // Your routes and logic for handling user registration will go here

    router.post('/register', async (req, res) => {
    try{
        //extract user data from the request body
        const { firstName, sirName, birthDay, userName, password } = req.body;
        
        const database = client.db("userDatabase");
        const usersCollection = client.collection("users");

        const existingUser = await User.findOne({ userName });
        
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        //creating new user

        const newUser = newUser({
            firstName,
            sirName,
            birthDay,
            userName,
            password
        });

        // Insert the new user to the database
        await usersCollection.insertOne(newUser);

        // Send a success response
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;

});