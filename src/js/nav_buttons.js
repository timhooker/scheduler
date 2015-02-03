function navButtons() {
  $('.appt-nav').on('click', '.add-btn', function() {
    showSection('#appt-edit');
    navButtons();
  });

  $('.appt-nav').on('click', '.back-btn', function() {
    showSection('#appt-listing');
    navButtons();
  });
  $('.appt-nav').on('click', '.edit-btn', function() {
    showSection('#appt-edit');
    navButtons();
  });
}

function showSection(sectionID) {
  var section = $(sectionID).html();

  $('.wrapper').html(
    '<div id="' + sectionID + '">' +
    section +
    '</div>');
}
