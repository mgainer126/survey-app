const express = require("express");
// const { userInfo } = require("os");
const router = express.Router();
// const knex = require("knex")(require("../knexfile").development);
const VendorController = require("../controller/createSurvey");
// const db = require("../db/dp");
const app = express();
app.use(express.json());
// const Vendor = require("../models/vendors");

router.post("/survey", VendorController.createVendor);

module.exports = router;
