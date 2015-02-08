//The appt constructur creates a new
//appt
app.Appointment = function (spec, currentAptId) {
  //TODO Add Constructor Function
  if (!spec.title || spec.title.trim() === '') {
    throw 'Title is required';
  } else if (!spec.date || spec.date.trim() === '') {
    throw 'Date is required';
  } else if (!spec.time || spec.time.trim() === '') {
    throw 'Time is required';
  }

  return {
    title: spec.title,
    date: spec.date,
    time: spec.time,
    street: spec.street,
    city: spec.city,
    state: spec.state,
    // zip: spec.zip,
    address: spec.street + " " + spec.city + " " + spec.state,
    aptId: currentAptId || Date.now(),
    equal: function (otherUser) {
      return self.aptId === otherUser.aptId;
    }
  };
};
