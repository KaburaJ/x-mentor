# -*- coding: utf-8 -*-
"""X-MentorTwitter_Sentiment.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1GFdWNr2yJZDdxtD3Sq-odIZ1n7Uq5lCd

# X-Mentor



## Introduction

<br>

Mental health challenges among university students, particularly at Dedan Kimathi University, present a significant concern with potential consequences on academic performance, daily functioning, and overall well-being. Despite the increasing prevalence of mental health issues, there is often a lack of proactive mechanisms for early detection and support within the university community. The existing gap necessitates an innovative solution that aligns with the contemporary communication landscape, particularly on Twitter.
The problem at hand is the absence of a dedicated and accessible platform for identifying and addressing potential mental health concerns expressed by Dedan Kimathi University students on Twitter. The traditional support systems may not be readily accessible, and the stigmatization of mental health discussions further compounds the challenge. Existing approaches fall short of providing a real-time, user-centric solution that comprehensively analyzes user language patterns to flag and respond to potential mental health issues.
The lack of a targeted AI-based intervention contributes to the delayed or inadequate support for students expressing distress on social media. As such, the development of an AI-based Mental Health Detection and Support Bot is imperative to bridge this gap. The outlined objectives aim to provide a user-friendly tool that not only identifies language indicative of mental health concerns but also responds with timely and supportive messages tailored to the unique context of Dedan Kimathi University. Through the proposed research questions, the project seeks to uncover the language patterns relevant to this specific university context, assess the bot's efficacy, and gather user feedback to continually improve and tailor the intervention for optimal impact within the Dedan Kimathi University student community.


## General Objective
Develop a user-friendly AI-based bot for Twitter that analyzes user language to flag potential mental health concerns, provides help, and specifically target Dedan Kimathi University students.


## Specific objectives
1.	Implement a language analysis algorithm to detect key indicators of mental health issues, such as curse words and distress expressions, in Twitter posts from Dedan Kimathi University students.
1.	Integrate the bot with the Twitter API to monitor tweets in real-time, flagging and responding to identified mental health concerns with supportive messages.
1.	Create a user-friendly web interface for the bot, allowing users to easily access and understand flagged tweets and the provided help messages.

### 1. Importing Libraries
"""

import numpy as np
import pandas as pd

import matplotlib.pyplot as plt
import seaborn as sns

import matplotlib.pyplot as plt
import plotly.graph_objects as go
from plotly.subplots import make_subplots
import plotly.io as pio


import warnings

"""### 2. Viewing Data"""

train = pd.read_csv('/content/train_tweet.csv')
test = pd.read_csv('/content/test_tweets.csv')

print(train.shape)
print(test.shape)

"""*There are 31962 training tweets and 17197 testing tweets.*"""

train.head()

test.head()

train.isnull().any()
test.isnull().any()

"""*Conclusion: The data is fairly clean and has no missing values*

### Checking out the negative comments from the train set
"""

train[train['label'] == 0].head(10)

"""### Checking out the positive comments from the train set"""

train[train['label'] == 1].head(10)

"""### Value Counts Visualization"""

train['label'].value_counts().plot.bar(color = 'pink', figsize = (6, 4))

"""### Checking the distribution of tweets in the data"""

length_train = train['tweet'].str.len().plot.hist(color = 'pink', figsize = (6, 4))
length_test = test['tweet'].str.len().plot.hist(color = 'orange', figsize = (6, 4))

"""#### Exporting `positive_vs_negative_plot.html`


"""

fig = make_subplots(rows=1, cols=1)
fig.add_trace(go.Bar(x=train['label'].value_counts().index, y=train['label'].value_counts().values, marker_color='pink'))

fig.update_layout(title='Positive vs Negative Counts', xaxis_title='Labels', yaxis_title='Counts')

"""#### Exporting `tweets_distribution.html`


"""

fig = make_subplots(rows=1, cols=1)

length_train = train['tweet'].str.len()
fig.add_trace(go.Histogram(x=length_train, marker_color='pink'), row=1, col=1)

length_test = test['tweet'].str.len()
fig.add_trace(go.Histogram(x=length_test, marker_color='orange'), row=1, col=1)

fig.update_layout(title_text='Distribution of Tweet Lengths',
                  xaxis_title_text='Tweet Length',
                  yaxis_title_text='Frequency')

pio.write_html(fig, file='tweets_distribution.html')

"""### Adding a column to represent the length of the tweet"""

train['len'] = train['tweet'].str.len()
test['len'] = test['tweet'].str.len()

train.head(10)

train.groupby('label').describe()

"""### Variation of tweets' length visualization"""

train.groupby('len').mean()['label'].plot.hist(color = 'black', figsize = (6, 4),)
plt.title('variation of length')
plt.xlabel('Length')
plt.show()

"""#### Exporting `tweet_length_variation.html`"""

fig = go.Figure()

fig.add_trace(go.Histogram(x=train['len'], marker_color='black'))

fig.update_layout(title_text='Variation of Length',
                  xaxis_title_text='Length',
                  yaxis_title_text='Mean Label',
                  bargap=0.1)

pio.write_html(fig, file='tweet_length_variation.html')

"""### Most frequently occuring words visualization"""

from sklearn.feature_extraction.text import CountVectorizer
import matplotlib.pyplot as plt
import plotly.graph_objects as go
import plotly.io as pio
import pandas as pd

cv = CountVectorizer(stop_words='english')
words = cv.fit_transform(train.tweet)

sum_words = words.sum(axis=0)

words_freq = [(word, sum_words[0, i]) for word, i in cv.vocabulary_.items()]
words_freq = sorted(words_freq, key=lambda x: x[1], reverse=True)

frequency = pd.DataFrame(words_freq, columns=['word', 'freq'])

plt.figure(figsize=(15, 7))
plt.bar(frequency['word'].head(30), frequency['freq'].head(30), color='blue')
plt.title("Most Frequently Occurring Words - Top 30")

plt.savefig('most_frequently_occurring_words.png')

fig = go.Figure()

fig.update_layout(images=[go.layout.Image(
    source='most_frequently_occurring_words.png',
    x=0,
    y=1,
    xref='paper',
    yref='paper',
    sizex=0.5,
    sizey=0.5,
    opacity=1,
    layer='below'
)])

fig.update_layout(title_text='Most Frequently Occurring Words - Top 30', xaxis_title='Word', yaxis_title='Frequency')

pio.write_html(fig, file='most_frequently_occurring_words.html')

from sklearn.feature_extraction.text import CountVectorizer
import plotly.graph_objects as go
import plotly.io as pio
import pandas as pd

cv = CountVectorizer(stop_words='english')
words = cv.fit_transform(train.tweet)

sum_words = words.sum(axis=0)

words_freq = [(word, sum_words[0, i]) for word, i in cv.vocabulary_.items()]
words_freq = sorted(words_freq, key=lambda x: x[1], reverse=True)

frequency = pd.DataFrame(words_freq, columns=['word', 'freq'])

# Plot with Plotly directly
fig = go.Figure()

fig.add_trace(go.Bar(x=frequency['word'].head(30), y=frequency['freq'].head(30), marker_color='blue'))

fig.update_layout(title_text='Most Frequently Occurring Words - Top 30', xaxis_title='Word', yaxis_title='Frequency')

pio.write_html(fig, file='most_frequently_occurring_words.html')

"""#### Exporting `most_frequently_occurring_words.html`


"""

from wordcloud import WordCloud

wordcloud = WordCloud(background_color = 'white', width = 1000, height = 1000).generate_from_frequencies(dict(words_freq))

plt.figure(figsize=(10,8))
plt.imshow(wordcloud)
plt.title("WordCloud - Vocabulary from Reviews", fontsize = 22)

"""### WordCloud - Vocabulary from Reviews Visualization"""

from wordcloud import WordCloud
import plotly.graph_objects as go
import matplotlib.pyplot as plt

fig = go.Figure()

wordcloud = WordCloud(background_color='white', width=1000, height=1000).generate_from_frequencies(dict(words_freq))

fig.add_trace(go.Image(z=wordcloud.to_array()))

fig.update_layout(title_text="WordCloud - Vocabulary from Reviews", title_font_size=22)

fig.write_html('wordCloud_vocabulary_from_reviews.html')

"""##### Exporting `neutral_words.html`

"""

from wordcloud import WordCloud
import plotly.graph_objects as go
import matplotlib.pyplot as plt

normal_words =' '.join([text for text in train['tweet'][train['label'] == 0]])

fig = go.Figure()

wordcloud = WordCloud(background_color='white', width=800, height=500, random_state = 0, max_font_size = 110).generate(normal_words)

fig.add_trace(go.Image(z=wordcloud.to_array()))

fig.update_layout(title_text="The Neutral Words", title_font_size=22)

fig.write_html('neutral_words.html')

"""### The Neutral Words Visualization"""

normal_words =' '.join([text for text in train['tweet'][train['label'] == 0]])

wordcloud = WordCloud(width=800, height=500, random_state = 0, max_font_size = 110).generate(normal_words)
plt.figure(figsize=(10, 7))
plt.imshow(wordcloud, interpolation="bilinear")
plt.axis('off')
plt.title('The Neutral Words')
plt.show()

"""### The Negative Words"""

negative_words =' '.join([text for text in train['tweet'][train['label'] == 1]])

wordcloud = WordCloud(background_color = 'cyan', width=800, height=500, random_state = 0, max_font_size = 110).generate(negative_words)
plt.figure(figsize=(10, 7))
plt.imshow(wordcloud, interpolation="bilinear")
plt.axis('off')
plt.title('The Negative Words')
plt.show()
fig.write_html('negative_words.html')

"""#### Exxporting `negative_words.html`


"""

from wordcloud import WordCloud
import plotly.graph_objects as go
import matplotlib.pyplot as plt

negative_words =' '.join([text for text in train['tweet'][train['label'] == 1]])

fig = go.Figure()

wordcloud = WordCloud(background_color = 'white', width=800, height=500, random_state = 0, max_font_size = 110).generate(negative_words)

fig.add_trace(go.Image(z=wordcloud.to_array()))

fig.update_layout(title_text="The Negative Words", title_font_size=22)

fig.write_html('negative_words.html')

"""### Collecting the hashtags"""

import re

def hashtag_extract(x):
    hashtags = []

    for i in x:
        ht = re.findall(r"#(\w+)", i)
        hashtags.append(ht)

    return hashtags

"""#### Extracting hashtags from non racist/sexist tweets"""

HT_regular = hashtag_extract(train['tweet'][train['label'] == 0])

HT_negative = hashtag_extract(train['tweet'][train['label'] == 1])

HT_regular = sum(HT_regular,[])
HT_negative = sum(HT_negative,[])

"""### Selecting top 20 most frequent hashtags"""

import nltk

a = nltk.FreqDist(HT_regular)
d = pd.DataFrame({'Hashtag': list(a.keys()),
                  'Count': list(a.values())})

d = d.nlargest(columns="Count", n = 20)
plt.figure(figsize=(16,5))
ax = sns.barplot(data=d, x= "Hashtag", y = "Count")
ax.set(ylabel = 'Count')
plt.show()

"""#### Exporting `20_most_frequent_negative_hashtags.html`"""

a = nltk.FreqDist(HT_negative)
d = pd.DataFrame({'Hashtag': list(a.keys()),
                  'Count': list(a.values())})

d = d.nlargest(columns="Count", n = 20)
plt.figure(figsize=(16,5))
ax = sns.barplot(data=d, x= "Hashtag", y = "Count")
ax.set(ylabel = 'Count')
plt.show()
fig.write_html('20_most_frequent_negative_hashtags.html')

"""### Top 20 Most Frequent Neutral Hashtags"""

import nltk
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
import plotly.graph_objects as go

a = nltk.FreqDist(HT_regular)
d = pd.DataFrame({'Hashtag': list(a.keys()), 'Count': list(a.values())})

d = d.nlargest(columns="Count", n=20)

plt.figure(figsize=(16, 5))
ax = sns.barplot(data=d, x="Hashtag", y="Count")
ax.set(ylabel='Count')
plt.show()

fig = go.Figure()
fig.add_trace(go.Bar(x=d['Hashtag'], y=d['Count']))

fig.update_layout(title_text="Top 20 Most Frequent Neutral Hashtags", title_font_size=18)

fig.write_html('20_most_frequent_neutral_hashtags.html')

"""#### Exporting `20_most_frequent_negative_hashtags.html`"""

import nltk
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
import plotly.graph_objects as go

a = nltk.FreqDist(HT_negative)
d = pd.DataFrame({'Hashtag': list(a.keys()), 'Count': list(a.values())})

d = d.nlargest(columns="Count", n=20)

plt.figure(figsize=(16, 5))
ax = sns.barplot(data=d, x="Hashtag", y="Count")
ax.set(ylabel='Count')
plt.show()

fig = go.Figure()
fig.add_trace(go.Bar(x=d['Hashtag'], y=d['Count']))

fig.update_layout(title_text="Top 20 Most Frequent Negative Hashtags", title_font_size=18)

fig.write_html('20_most_frequent_negative_hashtags.html')

"""#### Tokenizing the words present in the training set"""

tokenized_tweet = train['tweet'].apply(lambda x: x.split())

import gensim

model_w2v = gensim.models.Word2Vec(
    tokenized_tweet,
    vector_size=200,
    window=5,
    min_count=2,
    sg=1,
    hs=0,
    negative=10,
    workers=2,
    seed=34
)

model_w2v.train(tokenized_tweet, total_examples=len(train['tweet']), epochs=20)

"""#### Testing"""

model_w2v.wv.most_similar(positive = "dinner")

model_w2v.wv.most_similar(positive = "cancer")

model_w2v.wv.most_similar(positive = "apple")

model_w2v.wv.most_similar(negative = "hate")

"""### Labelling Tweets"""

from tqdm import tqdm
tqdm.pandas(desc="progress-bar")
from gensim.models.doc2vec import TaggedDocument

def add_label(twt):
    output = []
    for i, s in zip(twt.index, twt):
        output.append(TaggedDocument(words=s, tags=["tweet_" + str(i)]))
    return output

labeled_tweets = add_label(tokenized_tweet)

labeled_tweets[:6]

"""### Removing unwanted patterns from the data"""

import re
import nltk

nltk.download('stopwords')
from nltk.corpus import stopwords
from nltk.stem.porter import PorterStemmer

"""#### Train set"""

train_corpus = []

for i in range(0, 31962):
  review = re.sub('[^a-zA-Z]', ' ', train['tweet'][i])
  review = review.lower()
  review = review.split()

  ps = PorterStemmer()

  # stemming
  review = [ps.stem(word) for word in review if not word in set(stopwords.words('english'))]

  # joining them back with space
  review = ' '.join(review)
  train_corpus.append(review)

"""#### Test set"""

test_corpus = []

for i in range(0, 17197):
  review = re.sub('[^a-zA-Z]', ' ', test['tweet'][i])
  review = review.lower()
  review = review.split()

  ps = PorterStemmer()

  # stemming
  review = [ps.stem(word) for word in review if not word in set(stopwords.words('english'))]

  # joining them back with space
  review = ' '.join(review)
  test_corpus.append(review)

"""### Creating bag of words"""

from sklearn.feature_extraction.text import CountVectorizer

cv = CountVectorizer(max_features = 2500)
x = cv.fit_transform(train_corpus).toarray()
y = train.iloc[:, 1]

print(x.shape)
print(y.shape)

from sklearn.feature_extraction.text import CountVectorizer

cv = CountVectorizer(max_features = 2500)
x_test = cv.fit_transform(test_corpus).toarray()

print(x_test.shape)

"""### Splitting the training data into train and valid sets"""

from sklearn.model_selection import train_test_split

x_train, x_valid, y_train, y_valid = train_test_split(x, y, test_size = 0.25, random_state = 42)

print(x_train.shape)
print(x_valid.shape)
print(y_train.shape)
print(y_valid.shape)

"""### Standardization"""

from sklearn.preprocessing import StandardScaler

sc = StandardScaler()

x_train = sc.fit_transform(x_train)
x_valid = sc.transform(x_valid)
x_test = sc.transform(x_test)

"""### Model selection, training and accuracy

#### RandomForestClassifier
"""

from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import confusion_matrix
from sklearn.metrics import f1_score

model = RandomForestClassifier()
model.fit(x_train, y_train)

y_pred = model.predict(x_valid)

print("Training Accuracy :", model.score(x_train, y_train))
print("Validation Accuracy :", model.score(x_valid, y_valid))

print("F1 score :", f1_score(y_valid, y_pred))

cm = confusion_matrix(y_valid, y_pred)
print(cm)

import pickle

filename = 'x-mentor.pkl'

pickle.dump(model, open(filename, 'wb'))

pickle.load(open(filename, 'rb'))

"""#### LogisticRegression"""

from sklearn.linear_model import LogisticRegression

model = LogisticRegression()
model.fit(x_train, y_train)

y_pred = model.predict(x_valid)

print("Training Accuracy :", model.score(x_train, y_train))
print("Validation Accuracy :", model.score(x_valid, y_valid))

print("f1 score :", f1_score(y_valid, y_pred))

# confusion matrix
cm = confusion_matrix(y_valid, y_pred)
print(cm)

"""#### DecisionTreeClassifier"""

from sklearn.tree import DecisionTreeClassifier

model = DecisionTreeClassifier()
model.fit(x_train, y_train)

y_pred = model.predict(x_valid)

print("Training Accuracy :", model.score(x_train, y_train))
print("Validation Accuracy :", model.score(x_valid, y_valid))

# calculating the f1 score for the validation set
print("f1 score :", f1_score(y_valid, y_pred))

# confusion matrix
cm = confusion_matrix(y_valid, y_pred)
print(cm)

"""#### SVC"""

from sklearn.svm import SVC

model = SVC()
model.fit(x_train, y_train)

y_pred = model.predict(x_valid)

print("Training Accuracy :", model.score(x_train, y_train))
print("Validation Accuracy :", model.score(x_valid, y_valid))

# calculating the f1 score for the validation set
print("f1 score :", f1_score(y_valid, y_pred))

# confusion matrix
cm = confusion_matrix(y_valid, y_pred)
print(cm)

"""XGBClassifier"""

from xgboost import XGBClassifier

model = XGBClassifier()
model.fit(x_train, y_train)

y_pred = model.predict(x_valid)

print("Training Accuracy :", model.score(x_train, y_train))
print("Validation Accuracy :", model.score(x_valid, y_valid))

# calculating the f1 score for the validation set
print("f1 score :", f1_score(y_valid, y_pred))

# confusion matrix
cm = confusion_matrix(y_valid, y_pred)
print(cm)

