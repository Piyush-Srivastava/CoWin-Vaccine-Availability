var express = require("express");
var app = express();
var request = require('request');

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

var host = 'https://cdn-api.co-vin.in/api'
var pincode = 262001
var date = '03-05-2021'
app.get('/', (req, res) => {
    request.get({ url: host+'/v2/appointment/sessions/public/calendarByPin?pincode='+pincode+'&date='+date},      function(error, response, body) {
              if (!error && response.statusCode == 200) {
                  res.json(body);
                 }
             });
})


app.listen(3000, () => {
    console.log("Connection Successful");
});