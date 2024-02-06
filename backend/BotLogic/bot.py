import tweepy
import time

api_key = "0Cxwa1wjzLiIyOKMyFIX3rUri"
api_secret = "tXlV1FgJbrQrF6q955hUrpzsrbdpKckMfeewu4a7RzNkIbtbbA"
bearer_token= r"AAAAAAAAAAAAAAAAAAAAAPcMsQEAAAAAwBuHZzaweMue4A01eC3N9M1s8eI%3DgxBquA1I5VHjGq2IhXxQWcyuUufXZsbKBKCFmkGedF1ojsVsIP"
access_token = "1754868401170698241-EJqFN6OJYXJj1zujzQYDLp9ICO5LB4"
access_token_secret = "LbEbYGJ2j47tUpOGsS1G0HnovryLhbhEFjQ9RNFtOS6xG"
# Authenticate with Twitter API
auth = tweepy.OAuth1UserHandler(api_key, api_secret, access_token, access_token_secret)
api = tweepy.API(auth)

# Define search terms
search_terms = ["python", "programming", "coding"]

class MyStreamListener(tweepy.StreamListener):
    def on_status(self, status):
        print(status.text)
        api.create_favorite(status.id)  # Like the tweet

    def on_error(self, status_code):
        print(f"Error: {status_code}")

# Create a stream listener object
stream_listener = MyStreamListener()

# Create a stream object with the listener and authentication
stream = tweepy.Stream(auth=api.auth, listener=stream_listener)

# Start streaming tweets based on search terms
stream.filter(track=search_terms)