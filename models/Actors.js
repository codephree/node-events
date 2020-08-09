const db = require("./../database/db");

function readActors(cb){
    let sql = `SELECT * FROM actors ORDER BY login`;
    let error;  
    db.all(sql, function (err, rows) {
      if (err)
        error = err; 
      cb(error, rows);
    });
}
function readActorsbyStrak(cb){
  let error;
  let sql = `SELECT actors.id,actors.login,actors.avatar_url  FROM actors 
              INNER JOIN events ON events.actor_id = actors.id
              ORDER BY events.created_at`;
  db.all(sql, function (err, rows) {
    if (err)
        error = err; 
    cb(error, rows);
  });
}
function updateActors(data,cb){
  let error;
  let rows;
  let sql = `SELECT *  FROM actors WHERE id = ${data.id}`;
  db.all(sql, function (err, rows) {
    if (err)
        error = err; 
    if(rows){
       let sql = `UPDATE actors SET login =?, avatar_url=?
                 WHERE id = ${data.id}`;
       db.run(sql,[data.login, data.avatar_url], (err,row) => {
        if (err)
        error = err; 
        rows = row 
       });
    }else {
      error = "No rows found for the record"
    }
    cb(error, rows);
    // cb(rows);
  });
}
function createActors(data, cb) {
  let error;
  let sql = `INSERT INTO actors (id,login,avatar_url) VALUES (?,?,?)`;
  db.run(sql, [data.id, data.login, data.avatar_url], (err, rows) => {
    if (err) {
      error = err
    }
    cb(error,rows)
  });
}

function createRepo(data, cb) {
  let error;
  let sql = `INSERT INTO repo (id,name,url) VALUES (?,?,?)`;
  db.run(sql, [data.id, data.name, data.url], (err, rows) => {
    if (err) {
      error = err
    }
    cb(error,rows)
  });
}

module.exports = {
  createActors,
  createRepo,
  readActors,
  readActorsbyStrak,
  updateActors
};
