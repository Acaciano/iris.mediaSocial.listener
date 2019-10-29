const twit = require('twit');
//const tweetModel = require('models/tweet');

require('dotenv').config();

const Bot = new twit({
	consumer_key: 'aRqQxR7xe0dkpgonKB3LO7jkG',
	consumer_secret: 'zuG31sle0OGGoBdLdSA0KEIRAJEQeZ3quB4IyPJsk4rkunSA5M',
	access_token: '1058050673105952768-slMgPYVJc4ZPH8bHiqIllNnfW3ZD0h',
	access_token_secret: 'EVKNAGQPsesSj8zrU4fDbMCmiALqhWJf3lfgWBEnqBVX9',
	timeout_ms: 60 * 1000,
});

var twitTER_SEARCH_PHRASE = 'bolsonaro';

console.log('The bot is running...');

function BotRetweet() {
	const stream = Bot.stream('statuses/filter', {
		track: twitTER_SEARCH_PHRASE,
		language: 'pt'
	});

	stream.on('tweet', tweet => {
		if(isReply(tweet)) {
			console.warn('Ouvindo!');
		} else {
			Bot.post('statuses/retweet/:id', {
				id: tweet.id_str
			}, (error, response) => {
				if (error) {
					console.log('Bot não pôde retuitar, : ' + error);
				} else {

					//console.log(response);
					//await tweetModel.create({});

					console.log('Bot retweetou : ' + response.text);
				}
			});
		}
	});
};

function isReply(tweet) {
	if ( tweet.retweeted_status
	  || tweet.in_reply_to_status_id
	  || tweet.in_reply_to_status_id_str
	  || tweet.in_reply_to_user_id
	  || tweet.in_reply_to_user_id_str
	  || tweet.in_reply_to_screen_name )
	  return true
  }

module.exports = {
    Bot,
    BotRetweet,
    isReply,
}