var path = require('path'),
	ghost = require('ghost'),
	http = require('http');

ghost({
  config: path.join(__dirname, 'config.js')
}).then(function (ghostServer) {
  ghostServer.start();
});


setInterval(function() {
    http.get('http://ghost-pirates.herokuapp.com');
}, 300000);