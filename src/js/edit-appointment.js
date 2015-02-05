app.editAppointment = function(apptIndex) {

  var appointments = app.aptManager.query();
  var pageID = 'appt-edit';
  var currentAptId = $('.page').data('id');
  // console.log( appointments[0] );

  $('.wrapper').html(
    app.views['appt-edit']({ appointment: appointments[0], pageID: pageID }) );

  navButtons();

  // Give focus to the first input on load
  $('.appt-edit-content .appt-edit-title').focus();

  // Populate Inputs with Appt Content when Edit Btn is Clicked



  // Add Event Listener to Form
  // Create appt variable from createApptFromForm function
  // Add appt to datastore
  $('.appt-edit-content').submit(function() {
    var appt = createApptFromForm();
    app.aptManager.add(appt, apptIndex);
    resetApptForm();

    return false;
  });

  var apptTitle = appointments[apptIndex].title;
  var apptDate = appointments[apptIndex].date;
  var apptTime = appointments[apptIndex].time;
  var apptStreet = appointments[apptIndex].street;
  var apptCityState = appointments[apptIndex].cityState;

  $('.appt-edit-title').val(apptTitle);
  $('.appt-edit-date').val(apptDate);
  $('.appt-edit-time').val(apptTime);
  $('.appt-edit-street').val(apptStreet);
  $('.appt-edit-city-state').val(apptCityState);


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

    return app.Appointment(newAppt, currentAptId);
  }

  // Resets the inputs in the user form
  function resetApptForm() {
    $('.appt-edit-content input').val('');
    $('.appt-edit-content .appt-edit-title').focus();
  }
};
