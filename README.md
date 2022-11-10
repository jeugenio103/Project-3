# Project #3
> Analysis of Asian influence on Spotify and compare streaming of Asian American artists (88rising) to all artists streamed in United States. We will look at Spotify data to analyze. Given the increased diversification in mainstream media, we were interested to see what impact Asian Americans and Asians have made in the music industry in recent times. We specifically wanted to analyze data from 88rising, an American based music company that exclusively represents Asian American and Asian music artists.<br><br>

> Live demo [_here_](https://jeugenio103.github.io/Project-3/). <br><br>


Group Members:  Jeremiah Eugenio, Emilio Guzman, Kristy Le, Samantha Seng, Evelyn Votran
<br>
<br>

## Table of Contents
* [General Info](#general-information)
* [Features](#features)
* [Screenshots](#screenshots)
* [Popularity Analysis](#Popularity-Analysis)
* [Music Analysis](#Music-Analysis)
* [Resources](#usage)
* [Acknowledgements](#acknowledgements)
<!-- * [License](#license) -->


## General Information
- How do top 88rising artists compare to top mainstream artists on Spotify?<br>
- Do song elements play a role in the popularity of the artists or track?<br>
- Do collaborations have an effect on track popularity?<br>
<!-- You don't have to answer all the questions - just the ones relevant to your project. -->


## Features
List the ready features here:
- Apexcharts
- Javascript


## Screenshots
![Example screenshot](./img/screenshot.png)
<!-- If you have screenshots you'd like to share, include them here. -->


## Popularity-Analysis
For this section, we wanted to focus on the top 10 most listened to artists on Spotify, and the top 10 88rising artists based on monthly listeners. 
At first glance, you can see that the 88rising artists are pulling in about 10% of the monthly listeners of the top mainstream artists. The Weeknd is leading in monthly listeners with 78,767,075 monthly listeners, and 10th place being Dua Lipa with 60,387,424. For 88rising, Joji is leading that group with 30,050,750 monthly listeners, and 10th place being Guapdad 4000 with 975,759.<br><br>

When looking at the debut comparison chart, we can see that all of the 88rising artists debuted after all of the top mainstream artists. The mainstream artists all debuted between the late 90s to early 2010s, where all of 88 rising debuted officially from 2015 to 2020.<br><br>

Within these artists lists, their music genre encompasses:
['R&B', 'Pop', 'Hip Hop', 'Dance Pop', 'Alternative', 'Folk', 'Rock', 'Trap', 'EDM', 'Kpop', 'Misc.']
Top 3 categories for the mainstream artists are: pop, r&b, hip hop
Top 3 categories for the 88rising artists are: hiphop, r&b, misc
Misc: includes lofi, thai-pop, trip-hop<br><br>

We can see that hip hop and r&b overlaps both groups and most likely plays a role in what is marketable to the Spotify users and audience. However, 88rising having more uncommon genres incorporated within their artists sets them apart and are memorable for their listeners.

## Music-Analysis
For the music analysis we wanted to see how song elements could affect track popularity.
So we created a radar chart for the top 3 most popular mainstream artists and top 3 most popular 88Rising artists so we could see if there’s a trend amongst their music style or songs.The three factors we looked at besides popularity are danceability, energy, and valence. Danceability refers to how suitable a track is for dancing. Energy refers to the overall intensity and activity of the song. And valence refers to how positive a song is where more positive themes (happy) have a higher valence score and more sad themes have a lower valence score.<br><br>

We discovered that all 6 artists have above average energy and danceability for their songs while also having average to below average valence (besides Ed Sheeran). But a lot of his recent songs have been trending down on valence as seen in his most recent album called Divide. This trend can also be seen in how a lot of recent viral hits like “Slow Dancing in the Dark” by Joji and “Anti-Hero” by Taylor Swift have a prominent beat (contributing to having a higher danceability and energy score) but generally have sad overtones (contributing to an average to below average valence score). This can be extended to predicting future hits by conducting an audio analysis on the track and seeing how they stack up compared to more popular artists’ songs.


## Resources
Track feature and analysis:
https://developer.spotify.com/documentation/web-api/reference/#/operations/get-audio-features<br>

https://developer.spotify.com/documentation/web-api/reference/#/operations/get-audio-analysis<br><br>

##Spotify Authorization Guide: https://developer.spotify.com/documentation/general/guides/authorization/<br><br>
Spotipy<br>
https://github.com/plamere/spotipy





## Acknowledgements
Thank you Bob.
