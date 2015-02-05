//The appt constructur creates a new
//appt
app.Appointment = function (spec, currentAptId) {
  //TODO Add Constructor Function

  return {
    title: spec.title,
    date: spec.date,
    time: spec.time,
    street: spec.street,
    cityState: spec.cityState,
    address: spec.street + ', ' + spec.cityState,
    aptId: currentAptId || Date.now(),
    equal: function (otherUser) {
      return self.aptId === otherUser.aptId;
    }
  };
};
