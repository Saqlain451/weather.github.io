let weather  = {
    "apikey" : "730b31b63ce65e75d28c35671939633a",
    fetwheather : function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city + "&appid="+ this.apikey)
        .then((response)=>response.json())
        .then((data)=>this.displayWeather(data))
        .then((error)=> console.log(error))

    },
    keltocel:function(kel){
        cel = Math.round(kel - 273.15);
        return cel;
    },
    displayWeather:function(data){
        const {name} = data;
        const {icon,description} = data.weather[0];
        const {temp,humidity} = data.main;
        const {speed} = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.getElementById("name").innerHTML = name;
        document.getElementById("description").innerHTML = description;
        document.getElementById("temp").innerHTML = this.keltocel(temp);
        document.getElementById("humidity").innerHTML = humidity;
        document.getElementById("wind") . innerHTML = speed;

    },
    search : function(){
        searchValue = document.querySelector("input").value;
        this.fetwheather(searchValue);
    }
}
document.querySelector("button").addEventListener("click",function(){
    weather.search();
    
})
document.querySelector("input").addEventListener("keyup",function(event){
    if(event.key === "Enter"){
        weather.search();
    }
})
