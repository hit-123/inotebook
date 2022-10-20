const router = require("express").Router();

const { userRegistration } = require("../controller/useController");

router.post("/userRegistration", userRegistration);

module.exports = router;
