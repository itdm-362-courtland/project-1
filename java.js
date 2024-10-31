function show() {

            document.getElementById('image')
                .style.display = "block";
            document.getElementById('btnID')
                .style.display = "none";
        }
function validateForm() {
var x = document.forms["gaming"]["message"].value;
  if (x == "" || x == null) {
    alert("Name must be filled out");
    return false;
  }
}
function validateForm2() {
var x = document.forms["gaming"]["fname"].value;
  if (x == "" || x == null) {
    alert("Name must be filled out");
    return false;
  }
}
function validateForm3() {
var x = document.forms["gaming"]["email"].value;
  if (x == "" || x == null) {
    alert("Name must be filled out");
    return false;
  }
}