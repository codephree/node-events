var express = require("express");
var router = express.Router();

/*
*  Importing Controller to the route
*/
let actors = require("../controllers/actors");

router.get("/", actors.getAllActors);
router.put("/", actors.updateActor);
router.get("/streak", actors.getStreak);

// Routes related to actor.

module.exports = router;
