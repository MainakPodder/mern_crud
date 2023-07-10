const express = require("express");
const getData = require("../controllers/getData");
const postData = require("../controllers/postData");
const putData = require("../controllers/putData");
const deleteData = require("../controllers/deleteData");

const router = express.Router();

router.route("/").get(getData);
router.route("/").post(postData);
router.route("/:id").put(putData);
router.route("/:id").delete(deleteData);

module.exports = router;
