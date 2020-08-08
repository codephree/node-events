const Actors = require("../models/Actors");
var getAllActors = (req, res) => {
   Actors.readActors((data)=> {
      res.status(200).json(data);
    })  
};

var updateActor = (req, res) => {
  Actors.updateActors(req.body, (data) => {
    res.status(200).json(data)
  })
};

var getStreak = (req, res) => {
    Actors.readActorsbyStrak((data) => {
      res.status(200).json(data);
    })
};

module.exports = {
  updateActor: updateActor,
  getAllActors: getAllActors,
  getStreak: getStreak,
};
