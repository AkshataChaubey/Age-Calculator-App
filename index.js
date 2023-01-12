function age() {
  var d = document.getElementById("date").value;
  var m = document.getElementById("month").value;
  var y = document.getElementById("year").value;
  var date = new Date();
  var d2 = date.getDate();
  var m2 = date.getMonth() + 1;
  var y2 = date.getFullYear();

  var monthnumber = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
  console.log(y2);
  console.log(m2);
  console.log(d2);
  console.log(date);
  if (d > d2) {
    d2 = d2 + monthnumber[m2 - 1];
    m2 = m2 - 1;
  }
  if (m > m2) {
    m2 = m2 + 12;
    y2 = y2 - 1;
  }
  console.log("after changes", y2);
  console.log("after changes", d2);
  console.log("after changes", m2);

  var personbirthday = d2 - d;
  var personbirthmonth = m2 - m;
  var personbirthyear = y2 - y;

  console.log("person birthyear", personbirthyear);
  console.log("person birthmonth", personbirthmonth);
  console.log("person birthday", personbirthday);

  document.getElementById("age").innerHTML =
    "Your age is " +
    personbirthyear +
    "  years  " +
    personbirthmonth +
    "  months  " +
    personbirthday +
    "day";
}
