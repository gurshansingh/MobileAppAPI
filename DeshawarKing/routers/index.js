const express = require("express");
const router = express.Router();
const { getDailyKhabars, getImageBanner, getLuckyNumber, updateDailyKhabar, newSingleJodi } = require("../controller");

router.get("/dailyKhabar", getDailyKhabars);

router.get("/imageBanner", getImageBanner);

router.get("/luckyNumber", getLuckyNumber);

router.post("/updateKhabar", updateDailyKhabar);

router.get("/newSingleJodi", newSingleJodi);


module.exports = router;