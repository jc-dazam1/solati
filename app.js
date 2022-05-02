// Requiring module
const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

 
// Handling GET request
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
})

// Handling GET request
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/chat.html'));
})
 
app.use("/", router);
app.listen(process.env.port || 3000);

console.log("Running at Port 3000");
