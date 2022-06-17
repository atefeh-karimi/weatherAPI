$(document).ready(function () {
  var cityName = "tehran";
  function displayWeather() {
    var urlApi =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=63489e141c5326022b5cf7c02b7ea226&units=Metric";
    $(".city").text(cityName);

    $.getJSON(urlApi, function (data) {
      var temp = Math.floor(data.main.temp);
      $(".temp").text(temp + "°C");

      var icon =
        "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
      $(".icon").attr("src", icon);

      var desc = data.weather[0].description;
      $(".desc").text(desc);

      var unixTime = new Date(data.dt * 1000);
      var dateCity = unixTime.toDateString();
      $(".date").text(dateCity);
    });
  }

  displayWeather();

  function clearData() {
    $(".city").text("");
  }

  $(".search-button").click(function () {
    cityName = $(".search-input").val();
    clearData();
    displayWeather();
  });

  $(".search-input").keypress(function (e) {
    if (e.key == "Enter") {
      cityName = $(".search-input").val();
      clearData();
      displayWeather();
    }
  });
});
