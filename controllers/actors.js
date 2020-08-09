const Actors = require("../models/Actors");
var getAllActors = (req, res) => {
   Actors.readActors((err,data)=> {
       if(err)
        res.status(400).json(err)
       res.status(200).json(data);
    })  
};

var updateActor = (req, res) => {
  Actors.updateActors(req.body, (err,data) => {
    if(err)
        res.status(404).json(err)
    res.status(200).json(data)
  })
};

var getStreak = (req, res) => {
    Actors.readActorsbyStrak((err,data) => {
      if(err)
        res.status(400).json(err)
      res.status(200).json(data);
    })
};

module.exports = {
  updateActor: updateActor,
  getAllActors: getAllActors,
  getStreak: getStreak,
};
