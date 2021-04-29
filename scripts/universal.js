// these scripts require jquery library; include following code on each page:
// <script type='text/javascript' src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

// JS display toggle

$(document).ready(function () {
  $(".hideJS").addClass("showJS");
});

//Filter Function(courtesy W3 schools)

function itemFilter(inputLocation, listULID) {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById(inputLocation);
  filter = input.value.toUpperCase();
  ul = document.getElementById(listULID);
  li = ul.getElementsByTagName("li");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function cardFilter() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("search-box_bar");
  filter = input.value.toUpperCase();
  ul = document.getElementById("search-card-area");
  li = ul.getElementsByTagName("div");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
