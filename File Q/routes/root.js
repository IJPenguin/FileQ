const express = require("express");
const router = express.Router();
const path = require("path");

router.get("^/$|/index(.html)?", (req, res) => {
    // res.sendFile('./views/index.html', {root: __dirname});
    res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

router.get("/registerpage(.html)?", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "registerpage.html"));
});

router.get("/loginpage(.html)?", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "loginpage.html"));
});

router.get("/filesystem(.html)?", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "filesystem.html"));
});

module.exports = router;