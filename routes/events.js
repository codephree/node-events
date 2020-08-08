var express = require("express");
var router = express.Router();
/*
 *  Importing Controller to the route
 */
let events = require("../controllers/events");

router.get("/", events.getAllEvents);
router.post("/", events.addEvent);
router.get("/actors/:actorId", events.getByActor);

module.exports = router;
