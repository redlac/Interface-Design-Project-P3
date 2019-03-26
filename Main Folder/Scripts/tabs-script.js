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

  switch (screenName){
    case "tabs-Regular":
      // Show the current tab, and add an "active" class to the button that opened the tab
      document.getElementById(screenName).innerHTML = '<object type="text/html" data="regular_tab.html" width="100%" height="100%" style="overflow: hidden;"></object>';
      break;
    case "tabs-Special":
      // Show the current tab, and add an "active" class to the button that opened the tab
      document.getElementById(screenName).innerHTML = '<object type="text/html" data="special_tab.html" width="100%" height="100%" style="overflow: hidden;"></object>';
      break;
    case "tabs-History":
      // Show the current tab, and add an "active" class to the button that opened the tab
      document.getElementById(screenName).innerHTML = '<object type="text/html" data="history_tab.html" width="100%" height="100%" style="overflow: hidden;"></object>';
      break;
    case "tabs-OrderOptions":
      // Show the current tab, and add an "active" class to the button that opened the tab
      document.getElementById(screenName).innerHTML = '<object type="text/html" data="order_options_tab.html" width="100%" height="100%" style="overflow: hidden;"></object>';
      break;
  }
  document.getElementById(screenName).style.display = "block";
  evt.currentTarget.className += " active";
} 