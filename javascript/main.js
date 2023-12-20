const ageCalculator = () => {
  var birthDate = document.getElementById("date").value;

  var dob = new Date(birthDate);
  var y = dob.getFullYear();
  var m = dob.getMonth() + 1;
  var d = dob.getDate();

  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var day = now.getDate();
  var ageY = year - y;

  if (d > day) {
    var ageM = month - m + 12;
  } else {
    var ageM = month - m;
  }

  if (d > day) {
    var ageD = day - d + 30;
  } else {
    var ageD = day - d;
  }

  if (birthDate == null || birthDate == "") {
    document.getElementById("age").innerHTML = "Please enter age";
  } else if (ageY < 0) {
    document.getElementById("age").innerHTML = "Please enter valid age";
  } else {
    document.getElementById(
      "age"
    ).innerHTML = `Your age is ${ageY}y ${ageM}m ${ageD}d`;
  }
};
