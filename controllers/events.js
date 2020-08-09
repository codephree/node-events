const Event = require("../models/Events");
const Actors = require("../models/Actors");

var getAllEvents = async (req, res) => {
  Event.readEvents(function (err,data) {
    if(err)
        res.status(400).json(err)
     let result = setEventResult(data)
     res.status(200).json(result);
  });
};

var addEvent = (req, res) => {
    Actors.createActors(req.body.actor, function(data){});
    
    Actors.createRepo(req.body.repo, function(data){});
    let data = {
      'id': req.body.id,
      'type' : req.body.type,
      'actor_id' : req.body.actor.id,
      'repo_id' : req.body.repo.id,
      'created_at' : req.body.created_at,
    }
    Event.createEvent(data, function(err,data){
      if(err)
        res.status(400).json(err)
      res.status(201).json({
         'message' : 'Events added succsfully',
         'events' : data
       })
    })
};

var getByActor = (req, res) => {
   Event.readEventsbyActors(req.params.actorId, (err,data)=>{
    if(err)
      res.status(400).json(err)
     let result = setEventResult(data)  
     res.status(200).json(result)
   });
};

var eraseEvents = (req, res) => {
  Event.deleteEvent(req.params.id, (err,data) => {
    if(err)
        res.status(500).json(err)
    res.status(200).json({
      'message':'Event succesfully deleted'
    })
  })
};

var setEventResult = (data) => {
  var result = [];
  for(x in data)
  {
      result[x] = {
        id: data[x].id,
        type: data[x].type,
        actor: {
          id: data[x].actor_id,
          login: data[x].login,
          avatar_url: data[x].avatar_url,
        },
        repo: {
          id: data[x].repo_id,
          name: data[x].name,
          url: data[x].url,
        },
        created_at: data[x].created_at,
    }
  }
  return result;
};
module.exports = {
  getAllEvents: getAllEvents,
  addEvent: addEvent,
  getByActor: getByActor,
  eraseEvents: eraseEvents,
};
