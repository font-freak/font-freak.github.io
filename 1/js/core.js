// Navigation Mobile Menu Show or Hide
function navMenu() {
  var x = document.getElementById("nav");
  var y = document.getElementById("navstart");
  var z = document.getElementById("navend");
  if (x.style.display === "none") {
    x.style.display = "flex";
	y.style.display = "none";
	z.style.display = "block";
  } else {
    x.style.display = "none";
	y.style.display = "block";
	z.style.display = "none";
  }
  var a = document.getElementById("find");
  var b = document.getElementById("findstart");
  var c = document.getElementById("findend");
  var d = document.getElementById("qrview");
  var e = document.getElementById("shareview");
  a.style.display = "none";
  b.style.display = "block";
  c.style.display = "none";
  d.style.display = "none";
  e.style.display = "none";
}

// Navigation Mobile Search Show or Hide
function navSearch() {
  var x = document.getElementById("find");
  var y = document.getElementById("findstart");
  var z = document.getElementById("findend");
  if (x.style.display === "none") {
    x.style.display = "flex";
	y.style.display = "none";
	z.style.display = "block";
  } else {
    x.style.display = "none";
	y.style.display = "block";
	z.style.display = "none";
  }
  var a = document.getElementById("nav");
  var b = document.getElementById("navstart");
  var c = document.getElementById("navend");
  var d = document.getElementById("qrview");
  var e = document.getElementById("shareview");
  a.style.display = "none";
  b.style.display = "block";
  c.style.display = "none";
  d.style.display = "none";
  e.style.display = "none";
}