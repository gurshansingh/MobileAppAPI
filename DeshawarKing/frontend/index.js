const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{

    // res.json(');
    res.sendFile(__dirname+'/view/index.html',{name:'harjinder'});
});

module.exports = router;