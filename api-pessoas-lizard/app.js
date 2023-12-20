//server.js
const express = require("express");
const app = express();
const PORT = 3000;
 
app.get("/", (req, res) => {
    res.json({message: 'ok'});
});
 
app.listen(PORT, () => {
    console.log(`Running in http://localhost:${PORT}`);
})

2
3
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
},