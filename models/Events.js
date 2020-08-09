const db = require("./../database/db");

function readEvents(cb) {
  let error;
  let sql = `SELECT events.id as id, events.created_at,
                  events.type as type, actors.id as actor_id,
                  actors.login as login, actors.avatar_url as avatar_url,
                  repo.name as repo_id, repo.name as name, repo.url as url
              FROM events 
              LEFT JOIN actors ON events.actor_id = actors.id
              LEFT JOIN repo ON events.repo_id = repo.id`;
  db.all(sql, function (err, rows) {
    let error;
    if (err) error = err;
    cb(error, rows);
  });
}
function readEventsbyActors(actorsID, cb) {
  let error;
  let sql = `SELECT * FROM events 
              INNER JOIN actors ON events.actor_id = actors.id
              LEFT JOIN repo ON events.repo_id = repo.id
              WHERE actors.id = ${actorsID}`;
  db.all(sql, function (err, rows) {
    if (err) error = err;
    cb(error, rows);
  });
}
function createEvent(data, cb) {
  let error;
  let sql = `INSERT INTO events (id,type,actor_id,repo_id,created_at) VALUES (?,?,?,?,?)`;
  db.run(
    sql,
    [data.id, data.type, data.actor_id, data.repo_id, data.created_at],
    function (err, rows) {
      if (err) error = err;
      cb(error, rows);
    }
  );
}
function deleteEvent(data, cb) {
  let error;
  let sql = `DELETE FROM events WHERE id = ?`;
  db.run(sql, data, (err, rows) => {
    if (err) error = err;
    cb(error, rows);
  });
}
module.exports = {
  readEvents,
  createEvent,
  readEventsbyActors,
  deleteEvent,
};
