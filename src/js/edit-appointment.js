app.editAppointment = function() {
  app.appointments = app.AppointmentStore();

  var appointments = app.appointments.query();
  var pageID = 'appt-edit';
  console.log( appointments[0] );

  $('.wrapper').html(
    app.views['appt-edit']({ appointment: appointments[0], pageID: pageID }) );

  navButtons();


};
