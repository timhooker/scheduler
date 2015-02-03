//var manager = PageManager();
//
//manager.registerPage('list', function () {
  //HERE, you render the list page
//});
//
// manager.registerPage('edit', function () {
//   //HERE, you render the edit page
// });
//
// manager.goTo('list', appointments);


//PageManager is responsible for changing from one
//page to another in our single page app
app.PageManager = function (rootElement) {
    //TODO: implement an obect which makes changing pages
    //convenient and relatively easy
    //
    //registerPage(name, callback)
    //goToPage(name);

  return {
    registerPage: function (name, callback) {

    },

    goTo: function(name, data) {

    }
  };
};
