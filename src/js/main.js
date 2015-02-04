$(function() {

  // display appointments we have currently
  app.manager = app.PageManager();
  app.aptManager = app.AppointmentStore();

  app.manager.registerPage('listings', function() {
    var pageID = 'appt-listing';

    $('.wrapper').html(
      app.views['appt-listing']({ appointments: app.aptManager.query(), pageID: pageID }) );

    navButtons();
    listingsPageEvents();
  });
  app.manager.registerPage('view', function(appt) {
    var pageID = 'appt-view';

    $('.wrapper').html(
      app.views['appt-view']({ appointment: appt, pageID: pageID }) );

    navButtons();
  });
  app.manager.registerPage('edit', function() {
    var pageID = 'appt-edit';

    $('.wrapper').html(
      app.views['appt-edit']({ appointment: appointments[0], pageID: pageID }) );

    navButtons();
  });

  var appointments = app.aptManager.query();
  app.manager.goTo('listings');


});
