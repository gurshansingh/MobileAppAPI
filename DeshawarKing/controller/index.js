const Khabar = require("../modals/khabar.model");
const Image = require("../modals/image.model");
const Lucky = require("../modals/luckynumber.model");
const SingleJodi = require("../modals/singlejodi.model");

const getDailyKhabars = async (req, res) => {
  Khabar.find()
    .sort({ khabarTop: -1 })
    .then((items) => {
      return res.status(200).json({ DailyKhabar: items });
    })
    .catch(function () {
      console.log("error");
    });
};

const newSingleJodi = async (req, res) => {
  const singleJodi = new SingleJodi({
    khabarName:'Deshraj',
    singleJodi:65
  });
  singleJodi.save();
};

const getImageBanner = async (req, res) => {
  Image.find()
    .then((items) => {
      return res.status(200).json({ imageBanner: items });
    })
    .catch(function () {
      console.log("error");
    });
};

const getLuckyNumber = async (req, res) => {
  Lucky.find()
    .then((data) => {
      return res.status(200).json({ LuckyNumber: data });
    })
    .catch(function () {
      console.log("reject");
    });
};

const updateDailyKhabar = async (req, res) => {
  const { KhabarID, KhabarNo, KhabarType } = req.body;
  if (KhabarType == "today") {
    const updateMany = {
      $set: {
        khabarTop: false,
      },
    };
    Khabar.updateMany({}, updateMany).then((data) => {
      const dataset = { $set: { khabarToday: KhabarNo, khabarTop: true } };
      Khabar.updateOne({ _id: KhabarID }, dataset).then((data) => {
        return res.json("ok");
      });
    });
  }
  if (KhabarType == "last") {
    const updateMany = {
      $set: {
        khabarTop: false,
      },
    };
    Khabar.updateMany({}, updateMany).then((data) => {
      const dataset = { $set: { khabarLast: KhabarNo, khabarTop: true } };
      Khabar.updateOne({ _id: KhabarID }, dataset).then((data) => {
        return res.json("ok");
      });
    });
  }
  if (KhabarType == "OC") {
    const updateMany = {
      $set: {
        khabarTop: false,
      },
    };
    Khabar.updateMany({}, updateMany).then((data) => {
      const dataset = { $set: { khabarOpenClose: KhabarNo, khabarTop: true } };
      Khabar.updateOne({ _id: KhabarID }, dataset).then((data) => {
        return res.json("ok");
      });
    });
  }
};

module.exports = { getDailyKhabars, getImageBanner, getLuckyNumber, updateDailyKhabar, newSingleJodi };
