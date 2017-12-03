const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
var bodyParser = require('body-parser')
const app = express();
var qr = require('qr-image');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/my_database');




//****************Define our shema */


var UserSchema = mongoose.Schema({
  nom: String,
  cin : String,
  num : String,
  type_sang : String 
});

var User = mongoose.model('User', UserSchema);





// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use(cors());
app.use(function(req, res, next) {
  console.log("hi hi");
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// Always return the main index.html, so react-router render the route in the client
app.get('/', (req, res) => {
  //res.sendFile(path.resolve(__dirname, '.', 'public', 'index.html'));
  res.send("ok ok")
});




app.get('/User?id', (req, res) => {

  var id = req.params.id ;



  res.send("ok ok")
});

app.post('/QR', (req, res) => {

   
  console.log(JSON.stringify(req.body));
var nom = req.body.nom ;
var cin = req.body.cin ;
var type_sang = req.body.type_sang ;
var num = req.body.num ;


var user = new User({
  nom : nom ,
  cin : cin ,
  type_sang : type_sang,
  num : num 
})

//***********save data */


user.save(function (err, user) {
  if (err) return console.error(err);
 
  console.log("user" + JSON.stringify(user));

  //*****GENREATE QR CODE */

  var qr_svg = qr.image(user.num, { type: 'png' });
  qr_svg.pipe(require('fs').createWriteStream(user.num + '.png'));

});




res.status(200).json("ok");

})

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
