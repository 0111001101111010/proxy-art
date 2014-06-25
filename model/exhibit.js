var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var uristring = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/exhibits';

var db = mongoose.createConnection(uristring);
var ExhibitSchema = new Schema( {
    "_id": Number,
    "id": { type: Number, unique: true },
    "title": String,
    "longitude": Number,
    "latitude": Number,
    "location": String,
    "artists": String,
    "url": String,
    "imageurl": String,
    "fullimage": String
});

  var Exhibit = mongoose.model('exhibits', ExhibitSchema,'exhibits');

db.once('open', function (){
    //
    // Exhibit.find({},function(err, exhibits) {
    //   console.log(exhibits);
    //   });
    //
    // Exhibit.findOne('title', function (err, animals) {
    //   console.log(animals);
    // });
    // console.log(Exhibit.model('exhibits').find({}));
    //
    db.model('exhibits', ExhibitSchema,'exhibits');
    console.log('default conn models:', mongoose.modelNames()); // -> []
    console.log('custom  conn models:', db.modelNames());
    db.model('exhibits').find(function(err, obj) {
      console.log(obj);
    });

});
