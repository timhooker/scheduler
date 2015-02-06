app.PageManager = function (rootElement) {
    //TODO: implement an obect which makes changing pages
    //convenient and relatively easy

    //registerPage(name, callback)
    //goToPage(name);

  //Grabbing all our templates and storing them

  app.isPageLoad = true;

  app.pages = {};

  return {
    registerPage: function (name, callback) {

      // Where do we store the templates??
      app.pages[name] = callback;
    },

    goTo: function(name, data) {
      var currentPage = $('.page').first();
      app.pages[name](data);
      var newPage = $('#appt-' + name);

      if(!app.isPageLoad) {
          // is there a way to only remove the second class?
        setTimeout(function() {
          currentPage.removeClass('active');
          newPage.addClass('active');
          setTimeout(function() {
            $('.page').first().remove();
          }, 400);
        }, 100);
      } else {
        newPage.addClass('active');
        app.isPageLoad = false;
      }
    }
  };
};
app.views = {};

$('script[type="type/html"]').each(function () {

  var elem = $(this).remove();

  app.views[elem.attr('id')] = _.template(elem.html(), { 'variable': 'm'});
});
