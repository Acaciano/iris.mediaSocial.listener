const twitterBot = require('./twitter-bot.js');

function init() {
	twitterBot.BotRetweet();
}

init();

module.exports = {
	init,
};
