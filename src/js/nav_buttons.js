function navButtons() {
  $('.appt-nav').on('click', '.add-btn', function() {
    showSection('#appt-edit');
    // $('#appt-edit').removeClass('inactive');
    navButtons();

  });

  $('.appt-nav').on('click', '.back-btn', function() {
    showSection('#appt-listing');
    navButtons();
    listingsPageEvents();
    // $('.page').removeClass('inactive');

  });
  $('.appt-nav').on('click', '.edit-btn', function() {
    showSection('#appt-edit');
    navButtons();
    // $('.page').removeClass('inactive');

  });
}

function showSection(sectionID) {
  var section = $(sectionID).html();
  $('.wrapper').html(
    '<div id="' + sectionID + '" class="page">' +
    section +
    '</div>');

}
