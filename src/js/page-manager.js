app.PageManager = function (rootElement) {
    //TODO: implement an obect which makes changing pages
    //convenient and relatively easy

    //registerPage(name, callback)
    //goToPage(name);

  //Grabbing all our templates and storing them

  var isHome = true;

  app.pages = {};

  return {
    registerPage: function (name, callback) {

      // Where do we store the templates??
      app.pages[name] = callback;
    },

    goTo: function(name, data) {
      app.pages[name](data);
      var currentPage = $('.page').first();
      var newPage = $('#appt-' + name);

      if(!isHome) {
        if (name === 'listing') {
          newPage.addClass('previous');
          // is there a way to only remove the second class?
          setTimeout(function() {
            newPage.removeClass('previous');
            currentPage.addClass('inactive');
            setTimeout(function() {
              currentPage.remove();
            }, 300);
          }, 100);
        } else {
          setTimeout(function() {
            newPage.removeClass('inactive');
            currentPage.addClass('previous');
            setTimeout(function() {
              currentPage.remove();
            }, 300);
          }, 100);
        }
      }
      isHome = false;
    }
  };
};
app.views = {};

$('script[type="type/html"]').each(function () {

  var elem = $(this).remove();

  app.views[elem.attr('id')] = _.template(elem.html(), { 'variable': 'm'});
});
