$(function() {

  $('.wrapper').html(
    app.views['appt-listing']);

  navButtons();
  listingsPageEvents();
});
