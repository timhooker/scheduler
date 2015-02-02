$(function() {

  var apptListing = $('#appt-listing').html();

  $('.wrapper').html(apptListing);

  $('.appt-nav').on('click', '.add-btn', function() {
    var apptEdit = $('#appt-view').html();

    $('.wrapper').html(apptEdit);

  });











});
