# Udacity Front End Developer Nanodegree Capstone

My custom travel app helps you  to plan your trips. Simply enter the desired trip location and date.Travel App will display the current weather depending on the travel date and an image of the location using information obtained from external APIs.

## About the Project

In most cases of personal projects, it is very common to pull basic data from an external API. This is what we have accomplished so far in this nanodegree. However, many production-level applications do not rely on only a single source of data, they usually pull multiple data from various resources and make them available to different parts of the app asynchronously, so one API can use the data gathered from another.

The project will include a simple form where you enter the location you are travelling to and the date you are leaving. If the trip is within a week, you will get the current weather forecast. If the trip is in the future, you will get a predicted forecast. 

## API(s) Used

* [Geonames API](http://www.geonames.org/export/web-services.html) - Geographical database from which the location data is pulled
* [Weatherbit API](https://weatherbit.net/dev) - Weather API for current and future weather data
* [Pixabay API](https://pixabay.com/api/docs/) - RESTful interface for searching and retrieving free images and videos

## Additional Features
 Allowing the user to remove/delete the trip.

 ## Getting Started
 1. Download or clone the project

 2. Install dependencies
```
   npm install --save-dev
```
3. Start the server
```
   npm start
```
4. Setup the environment development or production
```
   npm run build-dev
```
or 
```
npm run build-prod
```
5. Test with Jest
```
npm run test
```
Test cases are created using Jest.
server is run as http://localhost:5010/