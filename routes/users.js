const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    const myEnv = process.env.MY_ENV;
    res.json({ msg: "Hey Guys", myEnv: myEnv});
});

module.exports = router;