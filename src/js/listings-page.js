function listingsPageEvents() {
  $('.appt').on('click', '.appt-details', function() {

    showSection('#appt-view');
    navButtons();
  });
  $('.appt').on('click', '.appt-delete-btn', function() {
    var deleteBtn = $(this);
    var appt = deleteBtn.closest('.appt');
    var confirmDelete = appt.children('.appt-delete');
    confirmDelete.fadeIn('fast');
    confirmDelete.children('.appt-confirm-delete').on('click', function(){
      console.log('click');
      appt.remove();
    });
    confirmDelete.children('.appt-cancel-delete').on('click', function(){
      confirmDelete.fadeOut('fast');
    });
  });
}
