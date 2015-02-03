//Responsible for persisting the appointments
app.AppointmentStore = function() {
  //TODO: Create Store
  //
  var collection = [];
  //Should have at least these elements:

  var self = {
    add: function(obj) {
        // obj.aptId = collection.length + 1;
        collection.push(obj);
        // localStorage.collection = JSON.stringify(collection);
        return true;
    },
    query: function() {
      return collection;
    },
    remove: function(obj) {
      collection = collection.filter(function(item){
        return !obj.equal(item);
      });
      // localStorage.collection = JSON.stringify(collection);
      return;
    }
  };
  return self;
  //add(appointment)
  //removeById(appointmentId)
  //query()
};
