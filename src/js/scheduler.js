$(function() {

  var apptListing = $('#appt-listing').html();

  $('.wrapper').html(
    '<div id="appt-listing">' +
    apptListing +
    '</div>');

  navButtons();
  listingsPageEvents();
});
