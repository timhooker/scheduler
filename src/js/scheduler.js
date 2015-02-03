$(function() {

  var apptListing = $('#appt-listing').html();

  $('.wrapper').html(
    '<div id="appt-listing" class="page">' +
    apptListing +
    '</div>');

  navButtons();
  listingsPageEvents();
});
