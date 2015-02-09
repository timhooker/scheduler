$(function() {

  app.registerPages = function() {
    app.manager.registerPage('listing', function() {

      var pageID = 'appt-listing';
      var listingArr = app.aptManager.query();
      console.log(listingArr);
      //
      // listingArr.sort(function(a,b) {
      //   a = (a.time);
      //   b = (b.time);
      //   return a<b ? -1 : a>b ? 1 : 0;
      // });
      // listingArr.map(function() {
      //
      // });
      // listingArr = listingArr.map(function() {

        for (i = 0; i < listingArr.length; ++i) {
          // var pm = $('.appt-time')[0].textContent.toLowerCase().indexOf('pm');

          newStr = listingArr[i].date.replace(/,/g , '');
          var splitArr = newStr.split(' ');
          listingArr[i].date = splitArr[1] + ' ' + splitArr[0] + ', ' + splitArr[2];

          // console.log(listingArr[i].date);

          var pm = listingArr[i].time.replace(/ /g , '').toLowerCase().indexOf('pm');
          var ending = listingArr[i].time.slice(-3);
          var replaced = listingArr[i].time.replace(ending, '').replace(/:/g , '') + 0;
          // console.log(replaced);

          if (pm >= 0) {
            replaced = String(Number(replaced) + 12000) + ':00';
            var newTime = replaced.substring(0,2) + ':' + replaced.substring(3);
            // console.log(newTime);
          } else {
            replaced = String(Number(replaced)) + ':00';
            var newTime = replaced.substring(0,2) + ':' + replaced.substring(3);
            // console.log(newTime);
          }

          listingArr[i].newTime = newTime;
          console.log(listingArr[i].newTime);
        }
      // });

      listingArr.sort(function(a, b) {
        console.log(a.newTime);
      // dateArr = dateArr[1] + dateArr[0] + dateArr[2];
        // var pm = listingArr[i].time.replace(/ /g , '').toLowerCase().indexOf('pm');
        // var ending = listingArr[i].time.slice(-3);
        // var replaced = listingArr[i].time.replace(ending, '').replace(/:/g , '') + 0;
        // // console.log(replaced);
        //
        // if (pm >= 0) {
        //   replaced = String(Number(replaced) + 12000) + ':00';
        //   newTime = replaced.substring(0,2) + ':' + replaced.substring(3);
        //   // console.log(newTime);
        // } else {
        //   replaced = String(Number(replaced)) + ':00';
        //   newTime = replaced.substring(0,2) + ':' + replaced.substring(3);
        //   // console.log(newTime);
        // }

        a = new Date(a.date + ' ' + a.newTime);
        console.log(a);
        b = new Date(b.date + ' ' + b.newTime);
        return a<b ? -1 : a>b ? 1 : 0;
      });


      $('.wrapper').append(
        app.views['appt-listing']({ appointments: app.aptManager.query(), pageID: pageID }) );

      navButtons();
      listingsPageButtons();
    });

    app.manager.registerPage('weather', function() {

      var pageID = 'appt-weather';

      $('.wrapper').append(
        app.views['appt-weather']({ pageID: pageID }) );

      navButtons();
    });

    app.manager.registerPage('view', function(appt) {

      var pageID = 'appt-view';
      $('.wrapper').append(
        app.views['appt-view']({ appointment: appt, pageID: pageID }) );

      navButtons();
    });

    app.manager.registerPage('edit', function(appt) {

      var pageID = 'appt-edit';
      var appointments = app.aptManager.query();
      var currentAptId = $('.page').data('id');
      var apptIndex = app.aptManager.findById(currentAptId);
      $('.wrapper').append(
        app.views['appt-edit']({ appointment: appt, pageID: pageID }) );

      navButtons();
      $('.appt-edit-time').pickatime();
      $('.appt-edit-date').pickadate();

      // Give focus to the first input on load
      // $('.appt-edit-title').focus();

      // Add Event Listener to Form
      // Create appt variable from createApptFromForm function
      // Add appt to datastore
      $('.appt-edit-content').isHappy({

        fields: {
        // reference the field you're talking about, probably by `id`
        // but you could certainly do $('[name=name]') as well.
          '.appt-edit-title': {
            required: true,
            message: 'This event needs a title'
          },
          '.appt-edit-date': {
            required: true,
            message: 'A date is important for record keeping'
          },
          '.appt-edit-time': {
            required: true,
            message: 'Let\'s add a time so you\'re not late'
          }

        }
      });

      $('.appt-edit-content').on('submit', function() {
        var appt = createApptFromForm();

        if (appt) {
          app.aptManager.add(appt, apptIndex);
        }
        resetApptForm();

        return false;
      });

      function createApptFromForm() {
        var newAppt = {
          title: $('.appt-edit-title').val(),
          date: $('.appt-edit-date').val(),
          time: $('.appt-edit-time').val(),
          street: $('.appt-edit-street').val(),
          city: $('.appt-edit-city').val(),
          state: $('.appt-edit-state').val(),
        };
        var newApt;
        try {
          newApt = app.Appointment(newAppt, currentAptId);
        } catch(e) {
          // show the catch error
          console.log(e);
          return;
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

});
