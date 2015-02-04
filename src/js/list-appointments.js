$(function () {
  //TODO: manage all the list appts

  app.listAppointments = function () {
    app.aptManager = app.AppointmentStore();
    //
    //
    var appointments = app.aptManager.query();
    console.log('hey');
    var pageID = 'appt-listing';

    $('.wrapper').html(
      app.views['appt-listing']({ appointments: appointments, pageID: pageID }) );

    navButtons();
    listingsPageEvents();
  }
  app.viewAppointment = function () {
    app.aptManager = app.AppointmentStore();

    var appointments = app.aptManager.query();
    var pageID = 'appt-view';

    $('.wrapper').html(
      app.views['appt-view']({ appointments: appointments, pageID: pageID }) );

    navButtons();
  }

});
