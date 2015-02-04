app.views = {};

$(function () {
  $('script[type="type/html"]').each(function () {
    var elem = $(this).remove();
    app.views[elem.attr('id')] = _.template(elem.html(), { 'variable': 'm'});
  });
});
