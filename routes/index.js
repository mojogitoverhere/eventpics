var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET all events this user is a contributor of. */
router.get('/events', function(req, res, next) {
	var Event = mongoose.model('event');
 	Event.findEventsWithContributor(req.query.username, function(err, data) {
 		if (err) return console.log("couldn't find all the events");
 		res.json(data);
 	});
});

/* GET photo */
router.get('/photo', function(req, res) {
	res.sendFile('raven.jpg', {"root": "photos"});
});

module.exports = router;
