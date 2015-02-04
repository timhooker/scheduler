$(function () {
  //TODO: manage all the list appts

  app.listAppointments = function () {
    var appointments = app.aptManager.query();
    // console.log('hey');
    var pageID = 'appt-listing';

    $('.wrapper').html(
      app.views['appt-listing']({ appointments: appointments, pageID: pageID }) );

    navButtons();
    listingsPageEvents();
  };
  app.viewAppointment = function () {

    var appointments = app.aptManager.query();
    var pageID = 'appt-view';

    $('.wrapper').html(
      app.views['appt-view']({ appointment: appointments[0], pageID: pageID }) );

    navButtons();
  };

});
