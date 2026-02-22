const express = require("express");
const axios = require("axios");
const cors = require('cors');

const app = express();
app.use(cors());
const PORT = 3001;


app.get("/users", async (req, res) => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: "Error fetching data" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});