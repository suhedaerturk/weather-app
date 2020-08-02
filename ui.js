class UI{
    constructor(){
        this.location= document.getElementById('w-location');
        this.description= document.getElementById('w-desc');
        this.icon= document.getElementById('w-icon');
        this.humidity= document.getElementById('w-humidity');
        this.temp_max= document.getElementById('w-temp_max');
        this.feelslike= document.getElementById('w-feels-like');
        this.wind= document.getElementById('w-wind');
       
    }

    paint(weather) {
        this.location.textContent = weather.name;
        this.description.textContent= weather.weather.description;
        this.icon.textContent = weather.icon;
        this.humidity.textContent = `Relative humidity: ${weather.main.humidity}`;
        this.temp_max.textContent = weather.main.temp_max;
        this.feelslike.textContent = `Feels like: ${weather.main.feels_like}`;
        this.wind.textContent = `Wind: ${weather.wind}`;
    }
}