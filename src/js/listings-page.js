function listingsPageButtons() {

  $('.appt').on('click', '.appt-details', function() {
    // clicking on appt brings up the view page
    app.viewAppointment();
    navButtons();
  });

  $('.appt').on('click', '.appt-delete-btn', function() {
    // clicking on delete brings up the delete prompt
    var deleteBtn = $(this);
    var appt = deleteBtn.closest('.appt');
    var confirmDelete = appt.children('.appt-delete');
    // show the delete
    confirmDelete.fadeIn('fast');
    // confirm delete to remove
    confirmDelete.children('.appt-confirm-delete').on('click', function() {
      appt.remove();
    });
    // if cancelled, remove
    confirmDelete.children('.appt-cancel-delete').on('click', function() {
      confirmDelete.fadeOut('fast');
    });
  });
}
