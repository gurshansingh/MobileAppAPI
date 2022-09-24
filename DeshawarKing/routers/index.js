const express = require("express");
const router = express.Router();
const { getDailyKhabars, getImageBanner, getLuckyNumber, updateDailyKhabar } = require("../controller");

router.get("/dailyKhabar", getDailyKhabars);

router.get("/imageBanner", getImageBanner);

router.get("/luckyNumber", getLuckyNumber);

router.post("/updateKhabar", updateDailyKhabar);


module.exports = router;