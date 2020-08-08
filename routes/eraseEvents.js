var express = require("express");
var router = express.Router();

// Route related to delete events
let events = require("../controllers/events");

router.delete("/:id", events.eraseEvents);
module.exports = router;
