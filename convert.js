var fs = require('fs');
var xml2js = require('xml2js');
var request = require('request');

var parser = new xml2js.Parser();

request('http://www.norfolkva.gov/cultural_affairs/public_art_downtown.xml', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    //console.log(body); // Print the google web page.
    parser.parseString(body, function (err, result) {
    console.log('Done');
    var converted = JSON.stringify(result, undefined, 2);
    console.log(converted);
    });
  }
});
