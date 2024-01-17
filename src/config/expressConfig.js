const express = require("express");


const expressConfig = (app) => {

    const staticFiles = express.static("public");
    app.use(staticFiles);
    app.use(express.urlencoded({extended:false}));
}

module.exports = expressConfig;