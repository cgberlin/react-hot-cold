var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));

var lowestGuessStored = 'none';
var runServer = function(callback) {
        app.listen(3000, function() {
            console.log('Listening on localhost:3000');
            if (callback) {
                callback();
            }
        });
      };
runServer(function(err) {
        if (err) {
            console.error(err);
        }
    });
app.get('/fewest-guesses', (req, res) => {
  res.json({"lowestGuess" : lowestGuessStored});
});
app.post('/fewest-guesses', (req, res) => {
  lowestGuess = req.body;
  if (lowestGuess < lowestGuessStored || lowestGuessStored == 'none'){
    lowestGuessStored = lowestGuess;
  }
  res.json({"lowestGuess" : lowestGuessStored});
});


exports.app = app;
exports.runServer = runServer;
app.use(express.static('build'));
