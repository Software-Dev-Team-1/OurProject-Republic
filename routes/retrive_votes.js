var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb:+srv//Vincent_Z:$COLbuffs1@ourrepublic-0xcae.mongodb.net/prokect/votes'


app.get('/views/votes.ejs',function(req,res){
  var bernie_total = 'db.votes.find({"vote_bernie":"true"},{"count(*)":1});';
  var bloomberg_total = 'db.votes.find({"vote_bloomberg":"true"},{"count(*)":1});';
  var biden_total = 'db.votes.find({"vote_biden":"true"},{"count(*)":1});';
  var warren_total = 'db.votes.find({"vote_warren":"true"},{"count(*)":1});';
  var buttigieg_total = 'db.votes.find({"vote_buttigieg":"true"},{"count(*)":1});';
  var klobuchar_total = 'db.votes.find({"vote_klobuchar":"true"},{"count(*)":1});';
  db.task('get-everything', task =>{
    return task.batch([
      task.any(bernie_total),
      task.any(bloomberg_total),
      task.any(biden_total),
      task.any(warren_total),
      task.any(buttigieg_total),
      task.any(klobuchar_total),
    ]);
  })
});
