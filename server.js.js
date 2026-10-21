require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/api/telnxy/inbound', async (req, res) => {
    const { From, To, Body, Direction, Timestamp, CallId } = req.body;
    console.log(`Call from ${From} to ${To}: ${Body}`);
    
    // Example: Forward to your phone via Twilio or just log it
    res.status(200).send('OK');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
