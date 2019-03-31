function openScreen(evt, screenName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabs-tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tabs-tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  switch (screenName) {
    case "tabs-Regular":
      document.getElementById(screenName).innerHTML = '<object type="text/html" data="regular_tab.html" width="100%" height="100%" style="overflow: hidden;"></object>';
      document.getElementById("regular-tab").className += " active";
      break;
    case "tabs-Special":
      document.getElementById(screenName).innerHTML = '<object type="text/html" data="special_tab.html" width="100%" height="100%" style="overflow: hidden;"></object>';
      if (document.getElementById("regular-tab").className.includes(" active")) {
        document.getElementById("regular-tab").className = "tabs-tablinks";
      }
      break;
    case "tabs-History":
      document.getElementById(screenName).innerHTML = '<object type="text/html" data="history_tab.html" width="100%" height="100%" style="overflow: hidden;"></object>';
      if (document.getElementById("regular-tab").className.includes(" active")) {
        document.getElementById("regular-tab").className = "tabs-tablinks";
      }
      break;
    case "tabs-OrderOptions":
      document.getElementById(screenName).innerHTML = '<object type="text/html" data="Optional_tab.html" width="100%" height="100%" style="overflow: hidden;"></object>';
      if (document.getElementById("regular-tab").className.includes(" active")) {
        document.getElementById("regular-tab").className = "tabs-tablinks";
      }
      break;
  }
  document.getElementById(screenName).style.display = "block";
  evt.currentTarget.className += " active";
}