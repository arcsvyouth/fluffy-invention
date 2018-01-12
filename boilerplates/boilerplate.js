if (!window.XMLHttpRequest && 'ActiveXObject' in window) {
    window.XMLHttpRequest= function() {
        return new ActiveXObject('MSXML2.XMLHttp');
    };
}
function fillNav(activeNav) {
  var xhr= new XMLHttpRequest();
  xhr.open('GET', 'https://arcsvyouth.github.io/boilerplates/nav-boilerplate.html', true);
  xhr.onreadystatechange= function() {
      if (this.readyState!==4) return;
      if (this.status!==200) {
        alert("Error. This page requires Javascript to load.");
        return; // or whatever error handling you want
      }
      document.getElementById('nav').innerHTML= this.responseText;
      document.querySelectorAll(".nav>li")[activeNav].classList.add("active");
  };
  xhr.send();
}
function fillHead(titleName) {
  var xhr= new XMLHttpRequest();
  xhr.open('GET', 'https://arcsvyouth.github.io/boilerplates/head-boilerplate.html', true);
  xhr.onreadystatechange= function() {
      if (this.readyState!==4) return;
      if (this.status!==200) return; // or whatever error handling you want
      document.getElementById('head').innerHTML += this.responseText;
      document.getElementsByTagName("title")[0].textContent = titleName;
  };
  xhr.send();
}
