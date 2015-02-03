function listingsPageEvents() {
  $('.appt').on('click', '.appt-details', function() {

    showSection('#appt-view');
    navButtons();
  });
  $('.appt').on('click', '.appt-delete-btn', function() {
    var deleteBtn = $(this);
    deleteBtn.closest('.appt').remove();
  });
}
