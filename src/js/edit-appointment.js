app.editAppointment = function() {
  app.aptManager = app.AppointmentStore();

  var appointments = app.aptManager.query();
  var pageID = 'appt-edit';
  // console.log( appointments[0] );

  $('.wrapper').html(
    app.views['appt-edit']({ appointment: appointments[0], pageID: pageID }) );

  navButtons();

  // Add Event Listener to Form
  // Create appt variable from createApptFromForm function
  // Add appt to datastore
  $('.appt-edit-content').submit(function() {
    var appt = createApptFromForm();
    app.aptManager.add(appt);
    console.log(app.aptManager.query());

    return false;
  });

  function createApptFromForm() {
    var newAppt = {
      title: $('.appt-edit-title').val(),
      date: $('.appt-edit-date').val(),
      time: $('.appt-edit-time').val(),
      street: $('.appt-edit-street').val(),
      cityState: $('.appt-edit-city-state').val()
    };

    return app.Appointment(newAppt);
  }
};
