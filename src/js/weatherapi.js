var _PremiumApiBaseURL = 'http://api.worldweatheronline.com/free/v2/';
/*
    Please change the PremiumAPIKey to your own.
    These keys have been provided for testing only.
    If you don't have one, then register now: http://developer.worldweatheronline.com/member/register
*/
var _PremiumApiKey = '903c1901cc5f963c3e4f0fcfe3e95';

// -------------------------------------------

function JSONP_LocalWeather(input) {
    var url = _PremiumApiBaseURL + 'weather.ashx?q=' + input.query + '&format=' + input.format + '&extra=' + input.extra + '&num_of_days=' + input.num_of_days + '&date=' + input.date + '&fx=' + input.fx + '&tp=' + input.tp + '&cc=' + input.cc + '&includelocation=' + input.includelocation + '&show_comments=' + input.show_comments + '&key=' + _PremiumApiKey;

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
        callback: 'LocalWeatherCallback'
    };

    JSONP_LocalWeather(localWeatherInput);
    // e.preventDefault();
}

function LocalWeatherCallback(localWeather) {

    var weatherContainer = $('.weather-container');
    var output = '';
    var time = localWeather.data.current_condition[0].observation_time;


    // output = '<p class="temp">' + localWeather.data.current_condition[0].cloudcover + '</p>';
    // output += "<br/>Humidity: " + localWeather.data.current_condition[0].humidity;
    output += '<p class="temp">' + localWeather.data.current_condition[0].temp_F + '</p>';
    output += '<p>' + localWeather.data.current_condition[0].weatherDesc[0].value + '</p>';
    output += localWeather.data.current_condition[0].observation_time;
    // output += "<br/> Pressue: " + localWeather.data.current_condition[0].pressure;
    // output += "<br/> Time: " + localWeather.data.extra[0].localObsTime;
    // var localDate = new Date(localWeather.data.current_condition[0].observation_time);

    // weatherContainer.empty();
    // $('.weather-container').html(output);
    // weatherContainer.css('background-image', 'url(' + imageUrl + ')');

    // Conditional Background based on weather conditions

    // if (localWeather.data.current_condition[0].weatherDesc[0].value.toLowerCase().indexOf('cloud') >= 0) {
    //   weatherContainer.css('background-image', 'url(' + cloud + ')');
    // }
    // if (localWeather.data.current_condition[0].weatherDesc[0].value.toLowerCase().indexOf('sun') >= 0 || localWeather.data.current_condition[0].weatherDesc[0].value.toLowerCase().indexOf('clear') >= 0) {
    //   weatherContainer.css('background-image', 'url(' + sun + ')');
    // }
    // if (localWeather.data.current_condition[0].weatherDesc[0].value.toLowerCase().indexOf('rain') >= 0 || localWeather.data.current_condition[0].weatherDesc[0].value.toLowerCase().indexOf('shower') >= 0) {
    //   weatherContainer.css('background-image', 'url(' + rain + ')');
    // }
    // if (localWeather.data.current_condition[0].weatherDesc[0].value.toLowerCase().indexOf('snow') >= 0 || localWeather.data.current_condition[0].weatherDesc[0].value.toLowerCase().indexOf('flur') >= 0) {
    //   weatherContainer.css('background-image', 'url(' + snow + ')');
    // }
    // if (localWeather.data.current_condition[0].weatherDesc[0].value.toLowerCase().indexOf('snow') >= 0 || localWeather.data.current_condition[0].weatherDesc[0].value.toLowerCase().indexOf('flur') >= 0) {
    //   weatherContainer.css('background-image', 'url(' + snow + ')');
    // }


    weatherContainer.html(output);
    console.log(output);

}

//-------------------------------------------
