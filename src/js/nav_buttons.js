function navButtons() {
  $('.appt-nav').on('click', '.add-btn', function() {
    app.editAppointment();
    navButtons();
  });

  $('.appt-nav').on('click', '.back-btn', function() {
    app.listAppointments();
    navButtons();
    listingsPageButtons();
  });

  $('.appt-nav').on('click', '.edit-btn', function() {
    app.editAppointment();
    navButtons();
  });
}

// function showSection(sectionID, direction) {
//
//   var newSection = $('#' + sectionID).html();
//   var currentSection = $('.wrapper').children('.page').first();
//   var newPage = 'inactive';
//   var oldPage = 'previous';
//   if (direction === 'left') {
//     newPage = 'previous';
//     oldPage = 'inactive';
//   }
//
//   $('.wrapper').append(
//     '<div id="' + sectionID + '" class="page ' + newPage + '">' +
//     newSection +
//     '</div>');
//
//   setTimeout(function() {
//     $('#' + sectionID).removeClass( newPage );
//     currentSection.addClass( oldPage );
//
//     setTimeout(function() {
//       currentSection.remove();
//     }, 300);
//   }, 100);
// }
