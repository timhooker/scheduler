function navButtons() {
  $('.appt-nav').on('click', '.add-btn', function() {
    app.manager.goTo('edit', {});
  });

  $('.appt-nav').on('click', '.back-btn', function() {
    app.manager.goTo('listing');
  });

  $('.appt-nav').on('click', '.edit-btn', function() {
    app.manager.goTo('edit', {});
  });
}
