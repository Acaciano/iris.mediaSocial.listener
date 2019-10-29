const twitterBot = require('./twitter-bot.js');
const mongoose = require('mongoose');

//mongoose.connect("mongodb://localhost:27017/DB_MidiaSocial", { useNewUrlParser: true, useUnifiedTopology: true })

function init() {
	twitterBot.botRetweet();
}

init();

module.exports = {
	init
};
