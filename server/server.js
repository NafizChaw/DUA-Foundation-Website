import express from 'express';
import { connectDB } from './database/db.js'; // Import MongoDB connection

const app = express();

let db; // Declare the db variable globally

// First, connect to the database and start the server only after the connection is successful
connectDB().then(database => {
    db = database;

    // Start the server after db connection is successful
    const port = 3001;
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });

    // Define the route only after the db is connected
    app.get('/', async (req, res) => {
        if (!db) {
            return res.status(500).send('Database not initialized');
        }

        try {
            const collection = db.collection('users'); // Use your collection name
            const documents = await collection.find({}).toArray(); // Example query to fetch all documents
            res.json(documents); // Send documents as a response
            console.log(documents); // Print to console
        } catch (err) {
            console.error('Error fetching data:', err);
            res.status(500).send('Error fetching data');
        }
    });

}).catch(err => {
    console.error('Failed to connect to the database:', err);
    process.exit(1);
});