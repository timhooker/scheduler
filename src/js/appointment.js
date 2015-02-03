//The appt constructur creates a new
//appt
app.Appointment = function (spec) {
  //TODO Add Constructor Function
  return {
    title: spec.title,
    date: spec.date,
    time: spec.time,
    address: spec.address,
    aptId: 0,
    equal: function (otherUser) {
      return self.aptId === otherUser.aptId;
    }
  };
};
