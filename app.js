/// init weather object

const weather = new Weather('Dayton', '45431'); 

// Init UI
const ui = new UI();

weather.changeLocation('Miami', '33125');

//get weather with dom load
document.addEventListener('DOMContentLoaded', getWeather);



function getWeather(){

    weather.getWeather()
        .then( results =>{
            // ui.paint(results);
            console.log(results);
        }

        ).catch( err => {
            console.log(err);  
})}