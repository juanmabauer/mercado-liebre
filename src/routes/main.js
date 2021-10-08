const express = require("express");
const router = express.Router();

const controller = require("../controllers/mainController");


router.get("/", (req, res)=> {
    res.render("home");
})




module.exports = router;