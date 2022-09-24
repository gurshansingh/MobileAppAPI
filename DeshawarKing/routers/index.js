const express = require("express");
const router = express.Router();
const { getDailyKhabars, getImageBanner, getLuckyNumber } = require("../controller");

router.get("/dailyKhabar", getDailyKhabars);

router.get("/imageBanner", getImageBanner);

router.get("/luckyNumber", getLuckyNumber);

router.get("/mylove", (req, res) =>{
    res.status(200).json({
        'status':'done'
    })
});


module.exports = router;