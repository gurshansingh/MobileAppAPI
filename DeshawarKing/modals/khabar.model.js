const mongoose = require("mongoose");

const SattaKing = mongoose.connection.useDb("SattaKing");

const KhabarSchema = mongoose.Schema(
  {
    khabarName: {
      type: String,
      require: false,
    },
    khabarTime: {
      type: String,
      require: false,
    },
    khabarToday: {
      type: String,
      require: false,
    },
    khabarLast: {
      type: String,
      require: false,
    },
    khabarOpen: {
      type: String,
      require: false,
    },
    khabarClose: {
      type: String,
      require: false,
    },
    khabarOpenClose: {
      type: String,
      require: false,
    },
    khabarType: {
      type: Boolean,
      require: false,
    },
    khabarTop: {
      type: Boolean,
      require: false,
    },
  },
  { collection: "DailyKhabar" }
);

const dailyKhabar = SattaKing.model("DailyKhabar", KhabarSchema);

module.exports = dailyKhabar;
