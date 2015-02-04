app.viewAppointment = function() {
  app.appointments = app.AppointmentStore();
  //
  //
  var pageID = 'appt-view';

  $('.wrapper').html(
    app.views['appt-view']({ appointments: appointment[0], pageID: pageID }) );

  navButtons();
  listingsPageEvents();


};
