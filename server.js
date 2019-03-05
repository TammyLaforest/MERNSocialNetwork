const express = require("express");

const app = express();

// main app route
app.get("/", (req, res) => res.send("Hello"));

// process is for Heroku. 5000 is for localhost
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
