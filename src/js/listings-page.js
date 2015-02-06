function listingsPageButtons() {

  $('.appt').on('click', '.appt-details', function() {
    // clicking on appt brings up the view page
    var aptListing = $(this);
    // find the ID of the object
    var aptId = aptListing.closest('.appt').data('id');
    // find the index of the object
    var aptIndex = app.aptManager.findById(aptId);
    // get the object store
    var appointments = app.aptManager.query();
    // show the appropriate page
    app.manager.goTo('view', appointments[aptIndex]);
  });

  $('.appt').on('click', '.appt-delete-btn', function() {
    // clicking on delete brings up the delete prompt
    var deleteBtn = $(this);
    var appt = deleteBtn.closest('.appt');
    var aptId = appt.data('id');
    var confirmDelete = appt.children('.appt-delete');
    // show the delete
    confirmDelete.fadeIn('fast');
    // confirm delete to remove
    confirmDelete.children('.appt-confirm-delete').on('click', function() {
      appt.remove();
      var index = app.aptManager.findById(aptId);
      app.aptManager.remove(index);
    });
    // if cancelled, remove
    confirmDelete.children('.appt-cancel-delete').on('click', function() {
      confirmDelete.fadeOut('fast');
    });
  });
}
