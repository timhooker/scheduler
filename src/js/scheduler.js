$(function() {

  var apptListing = $('#appt-listing').html();

  $('body').html(apptListing);

  $('.appt-nav').on('click', '.add-btn', function() {
    var apptNav = $(this);
    var apptEdit = $('#appt-edit').html();

    console.log(apptEdit);
    $('body').html(apptEdit);
  });











});
