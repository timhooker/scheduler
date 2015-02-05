function listingsPageButtons(){$(".appt").on("click",".appt-details",function(){app.viewAppointment(),navButtons()}),$(".appt").on("click",".appt-delete-btn",function(){var t=$(this),a=t.closest(".appt"),e=a.data("id"),p=a.children(".appt-delete");p.fadeIn("fast"),p.children(".appt-confirm-delete").on("click",function(){a.remove();var t=app.aptManager.findById(e);console.log(t),app.aptManager.remove(t)}),p.children(".appt-cancel-delete").on("click",function(){p.fadeOut("fast")})})}function navButtons(){$(".appt-nav").on("click",".add-btn",function(){app.editAppointment(),navButtons()}),$(".appt-nav").on("click",".back-btn",function(){app.listAppointments(),navButtons(),listingsPageButtons()}),$(".appt-nav").on("click",".edit-btn",function(){app.editAppointment(),navButtons()})}var app={};app.AppointmentStore=function(){var t=JSON.parse(localStorage.getItem("collection"))||[],a={add:function(a){return t.push(a),!0},query:function(){return t},remove:function(a){return t.splice(a,1)},findById:function(a){var e;return t.forEach(function(t,p){Number(a)===t.aptId&&(e=p)}),e},clear:function(){localStorage.clear()}};return a},app.Appointment=function(t){return{title:t.title,date:t.date,time:t.time,street:t.street,cityState:t.cityState,address:t.street+", "+t.cityState,aptId:Date.now(),equal:function(t){return self.aptId===t.aptId}}},app.editAppointment=function(){function t(){var t={title:$(".appt-edit-title").val(),date:$(".appt-edit-date").val(),time:$(".appt-edit-time").val(),street:$(".appt-edit-street").val(),cityState:$(".appt-edit-city-state").val()};return app.Appointment(t)}function a(){$(".appt-edit-content input").val(""),$(".appt-edit-content .appt-edit-title").focus()}var e=app.aptManager.query(),p="appt-edit";$(".wrapper").html(app.views["appt-edit"]({appointment:e[0]||{},pageID:p})),navButtons(),$(".appt-edit-content .appt-edit-title").focus(),$(".appt-edit-content").submit(function(){var e=t();return app.aptManager.add(e),a(),!1})},$(function(){app.listAppointments=function(){var t=app.aptManager.query(),a="appt-listing";$(".wrapper").html(app.views["appt-listing"]({appointments:t,pageID:a})),navButtons(),listingsPageButtons()},app.viewAppointment=function(){var t=app.aptManager.query(),a="appt-view";$(".wrapper").html(app.views["appt-view"]({appointment:t[0],pageID:a})),navButtons()}}),$(function(){app.registerPages=function(){app.manager.registerPage("listings",function(){var t="appt-listing";$(".wrapper").html(app.views["appt-listing"]({appointments:app.aptManager.query(),pageID:t})),navButtons(),listingsPageButtons()}),app.manager.registerPage("view",function(t){var a="appt-view";$(".wrapper").html(app.views["appt-view"]({appointment:t,pageID:a})),navButtons()}),app.manager.registerPage("edit",function(){function t(){var t={title:$(".appt-edit-title").val(),date:$(".appt-edit-date").val(),time:$(".appt-edit-time").val(),street:$(".appt-edit-street").val(),cityState:$(".appt-edit-city-state").val()};return app.Appointment(t)}function a(){$(".appt-edit-content input").val(""),$(".appt-edit-content .appt-edit-title").focus()}var e="appt-edit";$(".wrapper").html(app.views["appt-edit"]({appointment:appointments[0],pageID:e})),navButtons(),$(".appt-edit-content .appt-edit-title").focus(),$(".appt-edit-content").submit(function(){var e=t();return app.aptManager.add(e),a(),!1})})},app.manager=app.PageManager(),app.aptManager=app.AppointmentStore(),app.registerPages(),app.manager.goTo("listings")}),app.PageManager=function(){var t={};return{registerPage:function(a,e){t[a]=e},goTo:function(a,e){t[a](e)}}},app.views={},$('script[type="type/html"]').each(function(){var t=$(this).remove();app.views[t.attr("id")]=_.template(t.html(),{variable:"m"})}),$(function(){}),app.viewAppointment=function(){var t="appt-view";$(".wrapper").html(app.views["appt-view"]({appointments:appointment[0],pageID:t})),navButtons(),listingsPageEvents()},$.getJSON("http://api.openweathermap.org/data/2.5/forecast?q=Durham,nc").done(function(t){var a=t.list[0].main.temp,e=1.8*(a-273.15)+32;console.log(e),console.log(t)}).fail(function(t,a,e){console.log(e),alert("Failed to connect to GitHub... See console for details.")}),$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Durham,NC").done(function(t){var a=t.main.temp,e=1.8*(a-273.15)+32;console.log(e),console.log(t)}).fail(function(t,a,e){console.log(e),alert("Failed to connect to GitHub... See console for details.")});
//# sourceMappingURL=app.js.map