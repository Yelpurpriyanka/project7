//const weatherbit_Url = 'http://api.weatherbit.io/v2.0/forecast/daily?';
//const weatherkey = '8cfa2cfb52f74a6887df38d661816d59';

//const pixabay_Url = 'https://pixabay.com/api/?';
//const pixkey = '17102936-c19945d4a1d94a873a7484fa4';
//const url = '&image_type=photo&pretty=true&category=places';

//const geonames_Url = 'http://api.geonames.org/searchJSON?q=';
//const dataUrl = '&maxRows=10';
//const userkey = 'travel01';


export async function getGeoLocation(city) {
    const userName = 'travel01'
    const url=`http://api.geonames.org/searchJSON?q=${city}&maxRows=1&username=${userName}`;
    try {
         const response = await fetch(url);
         const location = {};
         const traveldata = await response.json();
         location.lat = traveldata.geonames[0].lat;
         location.lng = traveldata.geonames[0].lng;
         location.country = traveldata.geonames[0].countryName;
         return location;
    } catch(e){
              console.log(e);
    }
  }