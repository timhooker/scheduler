$(function() {

  app.registerPages = function() {
    app.manager.registerPage('listings', function() {
      var pageID = 'appt-listing';

      $('.wrapper').html(
        app.views['appt-listing']({ appointments: app.aptManager.query(), pageID: pageID }) );

      navButtons();
      listingsPageButtons();
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

      // Give focus to the first input on load
      $('.appt-edit-content .appt-edit-title').focus();

      // Add Event Listener to Form
      // Create appt variable from createApptFromForm function
      // Add appt to datastore
      $('.appt-edit-content').submit(function() {
        var appt = createApptFromForm();
        app.aptManager.add(appt);
        resetApptForm();

        return false;
      });

      // Creates newAppt Object
      // Passes newAppt to app.Appointment function
      // Returns object
      function createApptFromForm() {
        var newAppt = {
          title: $('.appt-edit-title').val(),
          date: $('.appt-edit-date').val(),
          time: $('.appt-edit-time').val(),
          street: $('.appt-edit-street').val(),
          cityState: $('.appt-edit-city-state').val()
        };

        return app.Appointment(newAppt);
      }

      // Resets the inputs in the user form
      function resetApptForm() {
        $('.appt-edit-content input').val('');
        $('.appt-edit-content .appt-edit-title').focus();
      }

    });
  };


  // display appointments we have currently
  app.manager = app.PageManager();
  app.aptManager = app.AppointmentStore();
  app.registerPages();

  // var appointments = app.aptManager.query();
  app.manager.goTo('listings');



});
