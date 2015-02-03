$(function() {

  // var apptListing = $('#appt-listing').html();

  $('.wrapper').html(
    app.views['appt-listing']);
    // '<div id="appt-listing" class="page">' +
    // apptListing +
    // '</div>');

  navButtons();
  listingsPageEvents();
});
