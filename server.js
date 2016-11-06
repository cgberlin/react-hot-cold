var express = require('express');
var app = express();

var lowestGuess = 0;
var checkLowest = (userNumber) => {
  if (lowestGuess > userNumber) {
    lowestGuess = userNumber;
  }
};
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
  res.json({"lowestGuess" : lowestGuess});
});
app.post('/fewest-guesses', (req, res) => {
  checkLowest();
});


exports.app = app;
exports.runServer = runServer;
app.use(express.static('build'));
