  // Fetch the prayer times from the API
  const hijriYear = 1444;
  const hijriMonth = 11;
  const latitude = 33.22415258162422;
  const longitude = -8.501581231968592;
  const method = 2;
  
  const url = `http://api.aladhan.com/v1/hijriCalendar/${hijriYear}/${hijriMonth}?latitude=${latitude}&longitude=${longitude}&method=${method}`;
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const prayerTimes = data.data[0].timings;
    // Get the prayer times for today
      document.getElementById("fajr").textContent = prayerTimes.Fajr;
      document.getElementById("dhuhr").textContent = prayerTimes.Dhuhr;
      document.getElementById("asr").textContent = prayerTimes.Asr;
      document.getElementById("maghrib").textContent = prayerTimes.Maghrib;
      document.getElementById("isha").textContent = prayerTimes.Isha;
     })
    .catch(error => console.error(error));
    
// Replace YOUR_API_KEY with your API key from OpenWeatherMap
var apiKey = "16cf9ee6418886af1759d6b168410b13";
var country = "MA"; // Replace with the country code you want to get the weather for
var city = "El jadida"; // Replace with the city you want to get the weather for
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "," + country + "&appid=" + apiKey;

// Make the API request
$.getJSON(apiUrl, function(data) {
  // Extract the temperature and icon information from the API response
  var temp = Math.round(data.main.temp - 273.15); // Convert from Kelvin to Celsius
  var iconUrl = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

  // Update the HTML with the temperature and icon information
  $(".weather-icon").attr("src", iconUrl);
  $(".weather-temp").html(temp + "&deg;C");
});
function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}
setInterval(updateClock, 1000);


  // Add Arabic date
  var arabicDate = new Intl.DateTimeFormat('ar-FR-u-ca-islamic', {day: 'numeric', month: 'long',weekday: 'long',year : 'numeric'}).format(Date.now());
  document.getElementById("arabic-date").innerHTML = arabicDate;
  
  document.getElementById("day").innerHTML = day;
  document.getElementById("month").innerHTML = month;
  document.getElementById("year").innerHTML = year;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;


setInterval(updateClock, 1000);



  