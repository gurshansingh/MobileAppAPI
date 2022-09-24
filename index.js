const express = require("express");
const app = express();
const formData = require('express-form-data');
const DeshawarKing = require("./DeshawarKing/routers");


require('dotenv').config()
require("./DB");

app.use(express.json());
app.use(formData.parse());
app.use('/',require('./DeshawarKing/frontend'));
app.use("/DeshawarKing", DeshawarKing);
app.listen(process.env.PORT || 3000);