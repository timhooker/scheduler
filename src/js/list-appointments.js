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
  app.viewAppointment = function (aptId) {

    var appointments = app.aptManager.query();

    var index = app.aptManager.findById(aptId);
    console.log(index);

    var pageID = 'appt-view';

    $('.wrapper').html(
      app.views['appt-view']({ appointment: appointments[index], pageID: pageID }) );

    navButtons();
  };

});
