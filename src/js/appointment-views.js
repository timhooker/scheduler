app.views = {};
// Initialize views with all of the templates from the
// script hack in our HTML
$(function () {
  // Get all scripts that are of type "text/html"
  $('script[type="type/html"]').each(function () {
    // For each one of those scripts, we want to get it, and remove it
    // from the DOM. (No use keeping useless scripts in the document!)
    var elem = $(this).remove();
    // Now, elem is the current <script type="text/html"> element.
    //
    // Add a property to our views object with the same name as the
    // script's id attribute.
    //
    // So, if we had a <script id="foo" type="text/html">
    //
    // We'd expect to be able to do this:
    // var html = views.foo({ name: 'James' });
    //
    // Where foo is the compiled template that was defined in the script
    // tag whose id was foo... Hmm...
    app.views[elem.attr('id')] = _.template(elem.html());
  });
});
