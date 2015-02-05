$(function() {

  app.registerPages = function() {
    app.manager.registerPage('listing', function() {
      var pageID = 'appt-listing';

      $('.wrapper').append(
        app.views['appt-listing']({ appointments: app.aptManager.query(), pageID: pageID }) );

      navButtons();
      listingsPageButtons();
    });

    app.manager.registerPage('view', function(appt) {
      var pageID = 'appt-view';

      $('.wrapper').append(
        app.views['appt-view']({ appointment: appt, pageID: pageID }) );

      navButtons();
    });

    app.manager.registerPage('edit', function(appt) {
      var pageID = 'appt-edit';

      $('.wrapper').append(
        app.views['appt-edit']({ appointment: appt, pageID: pageID }) );

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
        var newApt;
        try {
          newApt = app.Appointment(newAppt);
        } catch(e) {
          // show the catch error
          console.log(e);
        }

        return newApt;
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
  app.isHome = true;

  // var appointments = app.aptManager.query();
  app.manager.goTo('listing');
  app.isHome = false;



});
