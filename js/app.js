function listingsPageButtons(){$(".appt").on("click",".appt-details",function(){var e=$(this),t=e.closest(".appt").data("id"),a=app.aptManager.findById(t),n=app.aptManager.query();$(".appt").off("click",".appt-details"),app.manager.goTo("view",n[a]),GetFutureWeather()}),$(".appt").on("click",".appt-delete-btn",function(){var e=$(this),t=e.closest(".appt"),a=t.data("id"),n=t.children(".appt-delete");n.fadeIn("fast"),n.children(".appt-confirm-delete").on("click",function(){t.remove();var e=app.aptManager.findById(a);app.aptManager.remove(e)}),n.children(".appt-cancel-delete").on("click",function(){n.fadeOut("fast")})})}function navButtons(){$(".appt-nav").on("click",".add-btn",function(){$(".add-btn").attr("disabled"),app.manager.goTo("edit",{})}),$(".appt-nav").on("click",".weather-btn",function(){$(".add-btn").attr("disabled"),app.manager.goTo("weather"),GetLocalWeather()}),$(".appt-nav").on("click",".back-btn",function(){app.manager.goTo("listing"),$(".appt-nav").off("click",".back-btn")}),$(".appt-nav").on("click",".edit-btn",function(){var e=$(".page").data("id"),t=app.aptManager.findById(e),a=app.aptManager.query();app.manager.goTo("edit",a[t]),$(".appt-nav").off("click",".edit-btn")})}function JSONP_LocalWeather(e){var t=_PremiumApiBaseURL+"weather.ashx?q="+e.query+"&format="+e.format+"&extra="+e.extra+"&num_of_days="+e.num_of_days+"&date="+e.date+"&fx="+e.fx+"&tp="+e.tp+"&cc="+e.cc+"&includelocation="+e.includelocation+"&show_comments="+e.show_comments+"&showlocaltime="+e.showlocaltime+"&key="+_PremiumApiKey;jsonP(t,e.callback)}function jsonP(e,t){$.ajax({type:"GET",url:e,async:!1,contentType:"application/json",jsonpCallback:t,dataType:"jsonp",success:function(){console.dir("success")},error:function(e){console.log(e.message),console.log("Did not work.")}})}function GetLocalWeather(){var e={query:myip,format:"JSON",num_of_days:"2",date:"",fx:"",cc:"",tp:"",includelocation:"",show_comments:"",showlocaltime:"yes",callback:"LocalWeatherCallback"};JSONP_LocalWeather(e)}function GetFutureWeather(){var e=$(".appt-date")[0].textContent.replace(/,/g,"").replace(/ /g,"-"),t=e.split("-"),a=["january","february","march","april","may","june","july","august","september","october","november","december"].indexOf(String(t[1]).toLowerCase())+1;10>a&&(a="0"+String(a)),t[0]<10&&(t[0]="0"+String(t[0])),newDate=t[2]+"-"+a+"-"+t[0];var n,r=$(".map").data("city"),o=$(".map").data("state"),p=String(r)+","+String(o),c=$(".appt-time")[0].textContent.toLowerCase().indexOf("pm"),s=$(".appt-time")[0].textContent.substring(0,2).replace(/:/g,"0")+"0",d="",l="";c>=0&&(s=Number(s)+1200),$.ajax(_PremiumApiBaseURL+"weather.ashx?q="+p+"&format=JSON&key="+_PremiumApiKey).done(function(e){for(console.log(e.data.weather),i=0;i<e.data.weather.length;++i)e.data.weather[i].date===newDate&&(n=e.data.weather[i]);for(i=0;i<n.hourly.length;++i)n.hourly[i].time>=s&&(d=String(n.hourly[i].tempF),l=String(n.hourly[i].weatherDesc[0].value),$(".weather-forecast__temp")[0].textContent=d+"º",$(".weather-forecast__desc")[0].textContent=l)}).fail(function(){console.log("Failed to get weather")})}function LocalWeatherCallback(e){var t=new Date,a=t.toLocaleTimeString(),n=a.toLowerCase().indexOf("pm"),i=$(".weather-container"),r="",o="img/cloud.jpg",p="img/sun.jpg",c="img/rain.jpg",s="img/snow.jpg",d="img/night.jpg",l=a.substring(0,2).replace(/:/g,"");r+='<p class="temp">'+e.data.current_condition[0].temp_F+"º</p>",r+='<p class="condition">'+e.data.current_condition[0].weatherDesc[0].value+"</p>",(e.data.current_condition[0].weatherDesc[0].value.toLowerCase().indexOf("cloud")>=0||e.data.current_condition[0].weatherDesc[0].value.toLowerCase().indexOf("over")>=0||e.data.current_condition[0].weatherDesc[0].value.toLowerCase().indexOf("cast")>=0)&&(i.css("background-image","url("+o+")"),i.css("color","aliceblue")),(e.data.current_condition[0].weatherDesc[0].value.toLowerCase().indexOf("sun")>=0||e.data.current_condition[0].weatherDesc[0].value.toLowerCase().indexOf("clear")>=0||e.data.current_condition[0].weatherDesc[0].value.toLowerCase().indexOf("shine")>=0)&&(i.css("background-image","url("+p+")"),i.css("color","rgb(255, 252, 0)")),(e.data.current_condition[0].weatherDesc[0].value.toLowerCase().indexOf("rain")>=0||e.data.current_condition[0].weatherDesc[0].value.toLowerCase().indexOf("shower")>=0||e.data.current_condition[0].weatherDesc[0].value.toLowerCase().indexOf("driz")>=0||e.data.current_condition[0].weatherDesc[0].value.toLowerCase().indexOf("drop")>=0)&&(i.css("background-image","url("+c+")"),i.css("color","rgb(65, 255, 0)"),i.css("background-position","89%")),(e.data.current_condition[0].weatherDesc[0].value.toLowerCase().indexOf("snow")>=0||e.data.current_condition[0].weatherDesc[0].value.toLowerCase().indexOf("flur")>=0)&&(i.css("background-image","url("+s+")"),i.css("background-position","94%"),i.css("color","white")),Number(l)>=7&&n>=0&&(i.css("background-image","url("+d+")"),i.css("color","rgb(200, 199, 190)"),console.log("night time")),i.html(r)}var app={};app.AppointmentStore=function(){var e=JSON.parse(localStorage.getItem("collection"))||[],t=function(){localStorage.setItem("collection",JSON.stringify(e))},a={add:function(a,n){return n>=0?e.splice(n,1,a):e.push(a),t(),!0},query:function(){return e},remove:function(a){return e.splice(a,1),t(),e},findById:function(t){var a;return e.forEach(function(e,n){Number(t)===e.aptId&&(a=n)}),a},clear:function(){localStorage.clear()}};return a},app.Appointment=function(e,t){if(!e.title||""===e.title.trim())throw"Title is required";if(!e.date||""===e.date.trim())throw"Date is required";if(!e.time||""===e.time.trim())throw"Time is required";return{title:e.title,date:e.date,time:e.time,street:e.street,city:e.city,state:e.state,zip:e.zip,address:e.street+" "+e.city+" "+e.state,aptId:t||Date.now(),equal:function(e){return self.aptId===e.aptId}}},$(function(){app.registerPages=function(){app.manager.registerPage("listing",function(){var e="appt-listing",t=app.aptManager.query();t.sort(function(e,t){return console.log(e.date+" "+e.time),e=new Date(e.date+e.time),t=new Date(t.date+e.time),t>e?-1:e>t?1:0}),$(".wrapper").append(app.views["appt-listing"]({appointments:app.aptManager.query(),pageID:e})),navButtons(),listingsPageButtons()}),app.manager.registerPage("weather",function(){var e="appt-weather";$(".wrapper").append(app.views["appt-weather"]({pageID:e})),navButtons()}),app.manager.registerPage("view",function(e){var t="appt-view";$(".wrapper").append(app.views["appt-view"]({appointment:e,pageID:t})),navButtons()}),app.manager.registerPage("edit",function(e){function t(){var e,t={title:$(".appt-edit-title").val(),date:$(".appt-edit-date").val(),time:$(".appt-edit-time").val(),street:$(".appt-edit-street").val(),city:$(".appt-edit-city").val(),state:$(".appt-edit-state").val()};try{e=app.Appointment(t,i)}catch(a){return void console.log(a)}return e}function a(){$(".appt-edit-content input").val(""),$(".appt-edit-content .appt-edit-title").focus()}var n="appt-edit",i=(app.aptManager.query(),$(".page").data("id")),r=app.aptManager.findById(i);$(".wrapper").append(app.views["appt-edit"]({appointment:e,pageID:n})),navButtons(),$(".appt-edit-time").pickatime(),$(".appt-edit-date").pickadate(),$(".appt-edit-content").isHappy({fields:{".appt-edit-title":{required:!0,message:"This event needs a title"},".appt-edit-date":{required:!0,message:"A date is important for record keeping"},".appt-edit-time":{required:!0,message:"Let's add a time so you're not late"}}}),$(".appt-edit-content").on("submit",function(){var e=t();return e&&app.aptManager.add(e,r),a(),!1})})},app.manager=app.PageManager(),app.aptManager=app.AppointmentStore(),app.registerPages(),app.isHome=!0,app.manager.goTo("listing")}),app.PageManager=function(){return app.isPageLoad=!0,app.pages={},{registerPage:function(e,t){app.pages[e]=t},goTo:function(e,t){var a=$(".page").first();app.pages[e](t);var n=$("#appt-"+e);app.isPageLoad?(n.addClass("active"),app.isPageLoad=!1):setTimeout(function(){a.removeClass("active"),n.addClass("active"),setTimeout(function(){$(".page").first().remove()},400)},100)}}},app.views={},$('script[type="type/html"]').each(function(){var e=$(this).remove();app.views[e.attr("id")]=_.template(e.html(),{variable:"m"})});var _PremiumApiBaseURL="http://api.worldweatheronline.com/free/v2/",_PremiumApiKey="903c1901cc5f963c3e4f0fcfe3e95",newDate;
//# sourceMappingURL=app.js.map