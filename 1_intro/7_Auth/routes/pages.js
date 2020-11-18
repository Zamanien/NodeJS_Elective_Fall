const router = require("express").Router(); 

router.get("/index", (req, res) => {
    return res.sendFile(__dirname + "/../html/index.html");
});


module.exports = router; 