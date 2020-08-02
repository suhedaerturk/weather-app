class Weather{
    
    constructor(city, state){
        this.apiKey ='b7ce185fb4360e0bdbbe4de99a12d250';
        this.city = city;
        this.state = state;
    }

    //fetch api

    async getWeather(){
        
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},
        ${this.state}&appid=${this.apiKey}`);
       

        const responseData = await response.json();
        return responseData.main;

    }

    // change weather location

    changeLocation(city, state){
        this.city = city;
        this.state = state;
    }

}