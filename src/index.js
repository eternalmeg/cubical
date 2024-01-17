const express = require("express");
const handlebarsConfig = require("./config/handlebarsConfig");
const expressConfig = require("./config/expressConfig");
const router = require("./router");



const app = express();
const PORT = 5050
handlebarsConfig(app);
expressConfig(app);



app.use(router);


app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
