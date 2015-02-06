function navButtons() {
  $('.appt-nav').on('click', '.add-btn', function() {
    app.manager.goTo('edit', {
      title: 'hanging out'
    });
  });

  $('.appt-nav').on('click', '.back-btn', function() {
    app.manager.goTo('listing');
  });

  $('.appt-nav').on('click', '.edit-btn', function() {
    var aptId = $('.page').data('id');
    var apptIndex = app.aptManager.findById(aptId);
    var appointments = app.aptManager.query();

    app.manager.goTo('edit', appointments[apptIndex]);
  });
}
