var _PremiumApiBaseURL = 'http://api.worldweatheronline.com/free/v2/';
/*
    Please change the PremiumAPIKey to your own.
    These keys have been provided for testing only.
    If you don't have one, then register now: http://developer.worldweatheronline.com/member/register
*/
var _PremiumApiKey = '903c1901cc5f963c3e4f0fcfe3e95';

// -------------------------------------------

function JSONP_LocalWeather(input) {
    var url = _PremiumApiBaseURL + 'weather.ashx?q=' + input.query + '&format=' + input.format + '&extra=' + input.extra + '&num_of_days=' + input.num_of_days + '&date=' + input.date + '&fx=' + input.fx + '&tp=' + input.tp + '&cc=' + input.cc + '&includelocation=' + input.includelocation + '&show_comments=' + input.show_comments + '&showlocaltime=' + input.showlocaltime + '&key=' + _PremiumApiKey;

    jsonP(url, input.callback);
}

// -------------------------------------------

// Helper Method
function jsonP(url, callback) {
    $.ajax({
        type: 'GET',
        url: url,
        async: false,
        contentType: "application/json",
        jsonpCallback: callback,
        dataType: 'jsonp',
        success: function (json) {
            console.dir('success');
        },
        error: function (e) {
            console.log(e.message);
            console.log('Did not work.');
        }
    });
}

//------------ LOCAL WEATHER ----------------

function GetLocalWeather(e) {

    var localWeatherInput = {
        query: myip,
        format: 'JSON',
        num_of_days: '2',
        date: '',
        fx: '',
        cc: '',
        tp: '',
        includelocation: '',
        show_comments: '',
        showlocaltime: 'yes',
        callback: 'LocalWeatherCallback'
    };

    JSONP_LocalWeather(localWeatherInput);
}

//------------- Future Weather --------------
var newDate;

function GetFutureWeather(e) {

    var date = $('.appt-date')[0].textContent.replace(/,/g , '').replace(/ /g , '-');
    var dateAr = date.split('-');
    var day;
    var monthNum = [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december"
    ].indexOf(String(dateAr[1]).toLowerCase()) + 1;

    if (monthNum < 10) {
      monthNum = '0' + String(monthNum);
    }

    if (dateAr[0] < 10) {
      dateAr[0] = '0' + String(dateAr[0]);
    }

    newDate = dateAr[2] + '-' + monthNum + '-' + dateAr[0];

    var city = $('.map').data('city');
    var state = $('.map').data('state');
    var qstr = String(city) + ',' + String(state);
    var dateMatch;
    var pm = $('.appt-time')[0].textContent.toLowerCase().indexOf('pm');
    var apptTime = $('.appt-time')[0].textContent.substring(0,2).replace(/:/g , '0') + '0';
    var futureTempF = '';
    var futureIcon;
    var futureDesc = '';

    if (pm >= 0) {
      apptTime = Number(apptTime) + 1200;
    }

    $.ajax(_PremiumApiBaseURL + 'weather.ashx?q=' + qstr + '&format=JSON' + '&key=' + _PremiumApiKey)
      .done(function(data) {
        console.log(data.data.weather);
        for (i = 0; i < data.data.weather.length; ++i) {
          if (data.data.weather[i].date === newDate) {
            dateMatch = data.data.weather[i];
          }
        }
        for (i = 0; i < dateMatch.hourly.length; ++i) {
          if (dateMatch.hourly[i].time >= apptTime) {
            futureTempF = String(dateMatch.hourly[i].tempF);
            futureDesc = String(dateMatch.hourly[i].weatherDesc[0].value);

            // $('.weather-forecast__icon')[0].textContent = futureIcon;
            $('.weather-forecast__temp')[0].textContent = futureTempF + 'º';
            $('.weather-forecast__desc')[0].textContent = futureDesc;
          }
        }
      })
      .fail(function(request, status, err) {
        console.log('Failed to get weather');
      });
}

//-------------------------------------------

function LocalWeatherCallback(localWeather) {

    var d = new Date();
    var currentTime = d.toLocaleTimeString();
    var pm = currentTime.toLowerCase().indexOf('pm');
    var weatherContainer = $('.weather-container');
    var output = '';
    var cloud = 'img/cloud.jpg';
    var sun = 'img/sun.jpg';
    var rain = 'img/rain.jpg';
    var snow = 'img/snow.jpg';
    var night = 'img/night.jpg';
    var currentHour = currentTime.substring(0,2).replace(/:/g , '');

    output += '<p class="temp">' + localWeather.data.current_condition[0].temp_F + 'º' + '</p>';
    output += '<p class="condition">' + localWeather.data.current_condition[0].weatherDesc[0].value + '</p>';

    // Conditional Background based on weather conditions

    if (localWeather.data.current_condition[0].weatherDesc[0].value.toLowerCase().indexOf('cloud') >= 0) {
      weatherContainer.css('background-image', 'url(' + cloud + ')');
      weatherContainer.css('color', 'aliceblue');
    }
    if (localWeather.data.current_condition[0].weatherDesc[0].value.toLowerCase().indexOf('sun') >= 0 || localWeather.data.current_condition[0].weatherDesc[0].value.toLowerCase().indexOf('clear') >= 0) {
      weatherContainer.css('background-image', 'url(' + sun + ')');
      weatherContainer.css('color', 'rgb(255, 252, 0)');
    }
    if (localWeather.data.current_condition[0].weatherDesc[0].value.toLowerCase().indexOf('rain') >= 0 || localWeather.data.current_condition[0].weatherDesc[0].value.toLowerCase().indexOf('shower') >= 0 || localWeather.data.current_condition[0].weatherDesc[0].value.toLowerCase().indexOf('driz') >= 0) {
      weatherContainer.css('background-image', 'url(' + rain + ')');
      weatherContainer.css('color', 'rgb(65, 255, 0)');
      weatherContainer.css('background-position', '89%');
    }
    if (localWeather.data.current_condition[0].weatherDesc[0].value.toLowerCase().indexOf('snow') >= 0 || localWeather.data.current_condition[0].weatherDesc[0].value.toLowerCase().indexOf('flur') >= 0) {
      weatherContainer.css('background-image', 'url(' + snow + ')');
      weatherContainer.css('background-position', '94%');
      weatherContainer.css('color', 'white');
    }

    if ((Number(currentHour) >= 7) && (pm >= 0)) {
      weatherContainer.css('background-image', 'url(' + night + ')');
      weatherContainer.css('color', 'rgb(200, 199, 190)');
      console.log('night time');
    }

    weatherContainer.html(output);
}



//-------------------------------------------
