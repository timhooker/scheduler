function navButtons() {
  $('.appt-nav').on('click', '.add-btn', function() {
    app.editAppointment();
    navButtons();
  });

  $('.appt-nav').on('click', '.back-btn', function() {
    app.listAppointments();
    navButtons();
    listingsPageButtons();
  });

  $('.appt-nav').on('click', '.edit-btn', function() {
    app.editAppointment();
    navButtons();
  });
}
