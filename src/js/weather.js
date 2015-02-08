// Open Weather Map APPID (API key) 5bc49b99acf94aa06a77511100e043f2

//http://api.openweathermap.org/data/2.5/forecast?q=Durham,nc

$.getJSON('http://api.openweathermap.org/data/2.5/forecast?q=Durham,nc')
  .done(function (data) {
    var K = (data.list[0].main.temp);
    var temp = (K - 273.15)* 1.8000 + 32.00;
    // var condition = ()
    // console.log(temp);
    // console.log(data);
  })
  .fail(function (request, status, err) {
    // console.log(err);
    alert('Failed to connect to GitHub... See console for details.');
  });

$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=Durham,NC')
  .done(function (data) {
    var K = (data.main.temp);
    var temp = (K - 273.15)* 1.8000 + 32.00;
    // var condition = ()
    // console.log(temp);
    // console.log(data);
  })
  .fail(function (request, status, err) {
    // console.log(err);
    alert('Failed to connect to GitHub... See console for details.');
  });
