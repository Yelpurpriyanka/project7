import {getGeoLocation} from './js/geonames';
import {getImage} from './js/pixabay'; 
import {weather_cordinates} from './js/weatherbit';
import './styles/style.scss';

const moment = require('moment');
const recentData = (traveldata) => {
    let div = document.createElement('div');
    div.classList.add('travel-container');
    document.getElementById('add').appendChild(div);
    div.innerHTML = 
    `<div class="travel" id='img' style="background-image: url('${traveldata.image}');"></div>
    <div class="travel" id='info'>
      <div class="travel" id="to">You are going to.. <span class="same">${traveldata.city}, ${traveldata.country}</span></div>
      <div class="travel" id="departure_date">Departure Date: <span class="same">${traveldata.departure_date}</span></div>
      <div class="travel" id="return_date">Returning Date: <span class="same">${traveldata.return_date}</span></div>
      <div class="travel" id="rem">Remaining Days: <span class="same">${traveldata.remainingdays} days</span></div>
      <div class="travel" id="temp">Weather Temperature: <span class="same">${traveldata.temp}°C</span></div>
      <div class="travel" id="des">Weather Forecast: <span class="same">${traveldata.description}</span></div>
    </div>`

    document.getElementById('delete').addEventListener('click', (e) => {
      e.preventDefault();
      div.remove();
    });
}

const traveldata= {};

const savetravel = async (e) => {
  const city = document.getElementById('city').value;
  const depDate = document.getElementById('dep').value;
  const retDate = document.getElementById('ret').value;
  const dateFormat = (date) => {
    const format = moment(date).format('LL');
    return format;
  } 
  const remainingdays = (departure_date, date) => {
    const totalDays = new Date(departure_date).getTime() - new Date().getTime();
    return Math.ceil(totalDays/86400000);
  }

  e.preventDefault();
  traveldata.city = city[0].toUpperCase() + city.slice(1);
  traveldata.getGeoLocation = await getGeoLocation(traveldata.city);
  traveldata.image = await getImage(traveldata.city);
  traveldata.departure_date = dateFormat(depDate);
  traveldata.return_date = dateFormat(retDate);
  traveldata.remainingdays = remainingdays(traveldata.departure_date, new Date());
  traveldata.lat = traveldata.getGeoLocation.lat;
  traveldata.lng = traveldata.getGeoLocation.lng;
  traveldata.country = traveldata.getGeoLocation.country;
  traveldata.weather_cordinates = await weather_cordinates(traveldata.lat, traveldata.lng);
  traveldata.temp = traveldata.weather_cordinates.data[traveldata.remainingdays].high_temp;
  traveldata.description = traveldata.weather_cordinates.data[traveldata.remainingdays].weather.description;
  //<span class="trip_countdown">Your trip to ${traveldata.city} is ${traveldata.remainingdays} days away</span>
  console.log(traveldata);
  recentData(traveldata);
}

document.getElementById('save').addEventListener('click', savetravel);
