//Responsible for persisting the appointments
app.AppointmentStore = function() {
  //TODO: Create Store
  //
  var sampleAppt = {
    title: 'samples'
  };

  var collection = JSON.parse(localStorage.getItem('collection')) || [];
  //Should have at least these elements:
  var storeLocal = function () {
    localStorage.setItem('collection', JSON.stringify(collection));
  };

  var self = {
    add: function(obj) {
      collection.push(obj);
      return true;
    },
    query: function() {
      return collection ;
    },
    remove: function(index) {
      return collection.splice(index, 1);

      storeLocal();
      // return;
    },
    findById: function(objId) {
      // returns the index of the appointment by ID
      var objIndex;
      collection.forEach(function(apt, i){
         if (Number(objId) === apt.aptId) {
           objIndex = i;
         }
       });
       return objIndex;
    },
    clear: function() {
      localStorage.clear();
    }
  };
  return self;
};