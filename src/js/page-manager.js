app.PageManager = function (rootElement) {
    //TODO: implement an obect which makes changing pages
    //convenient and relatively easy

    //registerPage(name, callback)
    //goToPage(name);

  //Grabbing all our templates and storing them


  var pages = {};

  return {
    registerPage: function (name, callback) {

      // Where do we store the templates??
      pages[name] = callback;
    },

    goTo: function(name, data) {
      pages[name](data);
    }
  };
};
app.views = {};

$('script[type="type/html"]').each(function () {

  var elem = $(this).remove();

  app.views[elem.attr('id')] = _.template(elem.html(), { 'variable': 'm'});
});
