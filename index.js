const express = require("express");
const app = express();
const DeshawarKing = require("./DeshawarKing/routers");

require('dotenv').config()
require("./DB");

app.use('/',require('./DeshawarKing/frontend'));
app.use("/DeshawarKing", DeshawarKing);
app.listen(process.env.PORT || 3000);