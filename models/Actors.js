const db = require("./../database/db");

function readActors(cb){
    let sql = `SELECT * FROM actors ORDER BY login`;
    db.all(sql, function (err, rows) {
      if (err)
        throw err; 
      cb(rows);
    });
}
function readActorsbyStrak(cb){
  let sql = `SELECT actors.id,actors.login,actors.avatar_url  FROM actors 
              INNER JOIN events ON events.actor_id = actors.id
              ORDER BY events.created_at`;
  db.all(sql, function (err, rows) {
    if (err)
      throw err; 
    cb(rows);
  });
}
function updateActors(data,cb){
  let sql = `SELECT *  FROM actors WHERE id = ${data.id}`;
  db.all(sql, function (err, rows) {
    if (err)
      throw err; 
    if(rows){
       let sql = `UPDATE actors SET login =?, avatar_url=?
                 WHERE id = ${data.id}`;
       db.run(sql,[data.login, data.avatar_url], (err,row) => {
          if(err)
            throw err
          cb(row)
       });
    }  
    
    // cb(rows);
  });
}
function createActors(data, cb) {
  let sql = `INSERT INTO actors (id,login,avatar_url) VALUES (?,?,?)`;
  db.run(sql, [data.id, data.login, data.avatar_url], (err) => {
    if (err) {
      console.log('*** Error Message from actors ****')
      console.log(err.message);
      cb({ err: err.message });
    }
  });
}

function createRepo(data, cb) {
  //console.log(data)
  let sql = `INSERT INTO repo (id,name,url) VALUES (?,?,?)`;
  db.run(sql, [data.id, data.name, data.url], (err) => {
    if (err) {
      console.log('*** Error Message from repo ****')
      cb({ err: err.message });
    }
  });
}

module.exports = {
  createActors,
  createRepo,
  readActors,
  readActorsbyStrak,
  updateActors
};
