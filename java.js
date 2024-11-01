function show() {

            document.getElementById('image')
                .style.display = "block";
            document.getElementById('btnID')
                .style.display = "none";
        }
function validateForm() {
var x = document.forms["gaming"]["message"].value;
  if (x == "" || x == null) {
    alert("Form must be filled out in full");
    return false;

  }
var x = document.forms["gaming"]["email"].value;
  if (x == "" || x == null) {
    alert("Form must be filled out in full");
    return false;
}
var x = document.forms["gaming"]["fname"].value;
  if (x == "" || x == null) {
    alert("Form must be filled out");
    return false;
}
}

