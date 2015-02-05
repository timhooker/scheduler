app.editAppointment = function() {
  app.aptManager = app.AppointmentStore();

  var appointments = app.aptManager.query();
  var pageID = 'appt-edit';
  // console.log( appointments[0] );

  $('.wrapper').html(
    app.views['appt-edit']({ appointment: appointments[0], pageID: pageID }) );

  navButtons();

  // Give focus to the first input on load
  $('.appt-edit-content .appt-edit-title').focus();

  // Add Event Listener to Form
  // Create appt variable from createApptFromForm function
  // Add appt to datastore
  $('.appt-edit-content').submit(function() {
    var appt = createApptFromForm();
    app.aptManager.add(appt);
    resetApptForm();


    return false;
  });

  // Creates newAppt Object
  // Passes newAppt to app.Appointment function
  // Returns object
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

  // Resets the inputs in the user form
  function resetApptForm() {
    $('.appt-edit-content input').val('');
    $('.appt-edit-content .appt-edit-title').focus();
  }
};
