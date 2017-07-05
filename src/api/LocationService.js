
import * as APIService from './APIService';

var server = "https://maps.googleapis.com/maps/api/";
var key = "AIzaSyBsDLQjdZVeJfFkyQdC4BdKM5QDdvfPFuw";
var cityName = "";

export function getCityByLatLng(lat, lng, offset, limit) {
    return fetch(server + 'geocode/json?latlng=' + lat + ',' + lng + '&key=' + key)
        .then(response => response.json())
        .then(json => {
            cityName = json.results[1].address_components[0].long_name;
            console.log("City Data", cityName.replace(/ /g, '').toLowerCase());
            return APIService.getMixListByCity( cityName.replace(/ /g, '').toLowerCase(), offset, limit );
        })
        .catch((err) => console.log(''));
}
