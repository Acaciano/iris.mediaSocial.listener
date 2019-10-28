const Twit = require('twit');

require('dotenv').config();

/* Configure the Twitter API */
const Bot = new Twit({
	consumer_key: 'aRqQxR7xe0dkpgonKB3LO7jkG',
	consumer_secret: 'zuG31sle0OGGoBdLdSA0KEIRAJEQeZ3quB4IyPJsk4rkunSA5M',
	access_token: '1058050673105952768-slMgPYVJc4ZPH8bHiqIllNnfW3ZD0h',
	access_token_secret: 'EVKNAGQPsesSj8zrU4fDbMCmiALqhWJf3lfgWBEnqBVX9',
	timeout_ms: 60 * 1000,
});

var TWITTER_SEARCH_PHRASE = '#bolsonaro';

console.log('The bot is running...');

/* BotRetweet() : To retweet recent tweets with our query */
function BotRetweet() {
	const stream = Bot.stream('statuses/filter', {
		track: TWITTER_SEARCH_PHRASE,
		language: 'pt'
	});

	stream.on('tweet', tweet => {
		if(isReply(tweet)) {
			console.warn('Tweet is a retweet!');
		} else {
			Bot.post('statuses/retweet/:id', {
				id: tweet.id_str
			}, (error, response) => {
				if (error) {
					console.log('Bot could not retweet, : ' + error);
				} else {
					console.log('Bot retweeted : ' + response.text);
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

// Exports
module.exports = {
    Bot,
    BotRetweet,
    isReply,
}