$(function() {

  var apptListing = $('#appt-listing').html();

  $('.wrapper').html(
    '<div id="appt-listing">' +
    apptListing +
    '</div>');

  navButtons();
  // $('.appt-nav').on('click', '.add-btn', function() {
  //   var apptEdit = $('#appt-edit').html();
  //
  //   $('.wrapper').html(apptEdit);
  //
  //   $('.appt-nav').on('click', '.back-btn', function() {
  //     console.log('back');
  //     $('.wrapper').html(
  //       '<div id="appt-listing">' +
  //       apptListing +
  //       '</div>');
  //
  //   });
  // });
  //
  // function navButtons() {
  //
  // }
  //
  // $('.appt-nav').on('click', '.back-btn', function() {
  //   console.log('back');
  //   $('.wrapper').html(
  //     '<div id="appt-listing">' +
  //     apptListing +
  //     '</div>');
  //
  // });

});
