--DROP ALL TABLES --
DROP TABLE IF  EXISTS events;
DROP TABLE IF  EXISTS repo;
DROP TABLE IF  EXISTS actors;
-- ENABLE FOREGIN KEY RESTRICTION --
PRAGMA foreign_keys = OFF;
-- ACTORS --
CREATE TABLE IF NOT EXISTS actors( 
         id INT PRIMARY KEY NOT NULL,
         login TEXT DEFAULT "", 
         avatar_url TEXT DEFAULT "");

INSERT INTO actors 
        (id, login, avatar_url)
VALUES
    (4276597,'iholloway','https://avatars.com/4276597'),
    (2917996,'oscarschmidt','https://avatars.com/2917996'),
    (2790311,'daniel33','https://avatars.com/2790311'),
    (2222918,'xnguyen','https://avatars.com/2222918'),
    (2907782,'eric66','https://avatars.com/2907782'),
    (3648056,'ysims','https://avatars.com/modified2'),
    (4864659,'katrinaallen','https://avatars.com/4864659'),
    (4949434,'millerlarry','https://avatars.com/4949434'),
    (3698252,'daniel51','https://avatars.com/3698252'),
    (3466404,'khunt','https://avatars.com/3466404');



-- REPO --
CREATE TABLE IF NOT EXISTS repo(
      id INT PRIMARY KEY NOT NULL,
      name TEXT DEFAULT "", 
      url TEXT DEFAULT "" );

INSERT INTO repo 
        (id, name, url)
VALUES 
    (425512,'cohenjacqueline/quam-autem-suscipit','https://github.com/cohenjacqueline/quam-autem-suscipit'),
    (478747,'ngriffin/rerum-aliquam-cum','https://github.com/ngriffin/rerum-aliquam-cum'),
    (301227,'oscarschmidt/doloremque-expedita','https://github.com/oscarschmidt/doloremque-expedita'),
    (310964,'brownphilip/rerum-quidem','https://github.com/brownphilip/rerum-quidem'),
    (292520,'svazquez/dolores-quidem','https://github.com/svazquez/dolores-quidem'),
    (275832,'elizabethbailey/error-quod-a','https://github.com/elizabethbailey/error-quod-a'),
    (451024,'daniel51/quo-tempore-dolor','https://github.com/daniel51/quo-tempore-dolor'),
    (269910,'iholloway/aperiam-consectetur','https://github.com/iholloway/aperiam-consectetur'),
    (426482,'pestrada/voluptatem','https://github.com/pestrada/voluptatem'),
    (352806,'johnbolton/exercitationem','https://github.com/johnbolton/exercitationem');

-- EVENTS --
CREATE TABLE IF NOT EXISTS events (
             id INT PRIMARY KEY NOT NULL,
             type TEXT ,
             actor_id INT,
             repo_id INT,
             created_at  DATE,
             FOREIGN KEY (actor_id)
                 REFERENCES actor (actor_id)
                     ON DELETE CASCADE
                     ON UPDATE NO ACTION,
             FOREIGN KEY (repo_id)
                 REFERENCES repo (repo_id)
                     ON DELETE CASCADE
                     ON UPDATE NO ACTION);
-- FOREIGN KEY(pipeline, owner) REFERENCES pipelines(name, owner)

INSERT INTO events 
        (id, type, actor_id,repo_id,created_at)
VALUES
    (4055191679,'PushEvent',2790311,352806,'2015-10-03 06:13:31'),
    (2712153979,'PushEvent',2907782,426482,'2014-07-13 08:13:31'),
    (4633249595,'PushEvent',4276597,269910,'2016-04-18 00:13:31'),
    (1514531484,'PushEvent',3698252,451024,'2013-06-16 02:13:31'),
    (1838493121,'PushEvent',4864659,275832,'2013-09-28 01:13:31'),
    (1979554031,'PushEvent',3648056,292520,'2013-11-11 17:13:31'),
    (1536363444,'PushEvent',4949434,310964,'2013-06-23 08:13:31'),
    (4501280090,'PushEvent',2917996,301227,'2016-03-05 10:13:31'),
    (3822562012,'PushEvent',2222918,425512,'2015-07-15 15:13:31'),
    (1319379787,'PushEvent',3466404,478747,'2013-04-17 04:13:31');
