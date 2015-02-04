$(function() {

  // display appointments we have currently
  app.manager = app.PageManager();
  app.manager.registerPage('listings', function() {
    var pageID = 'appt-listing';

    $('.wrapper').html(
      app.views['appt-listing']({ appointments: appointments, pageID: pageID }) );

    navButtons();
    listingsPageEvents();
  });
  app.manager.registerPage('view', function() {
    var pageID = 'appt-view';

    $('.wrapper').html(
      app.views['appt-view']({ appointment: appointments[0], pageID: pageID }) );

    navButtons();
  });
  app.manager.registerPage('edit', function() {
    var pageID = 'appt-edit';

    $('.wrapper').html(
      app.views['appt-edit']({ appointment: appointments[0], pageID: pageID }) );

    navButtons();
  });

  app.aptManager = app.AppointmentStore();
  var appointments = app.aptManager.query();
  app.manager.goTo('listings', appointments);


});
