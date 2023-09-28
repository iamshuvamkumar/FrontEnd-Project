var div = document.querySelector(".mid");
function fun() {
  div.classList.toggle("hide");
}
var travling = document.getElementById("travling");
travling.innerHTML = `Visiting-Places <span class="material-symbols-outlined">map</span>`;

var c = 0;
function closed() {
  if (c == 1) {
    var open = document.getElementById("closed");
    open.innerHTML = `menu`;
  } else {
    var crose = document.getElementById("closed");
    crose.innerHTML = `close`;
    c = 0;
  }
  c++;
}

async function getAPIData() {
  var name = "delhi";
  if (document.getElementById("search").value == "") {
    document.getElementById("search").value = name;
  } else {
    name = document.getElementById("search").value;
  }
  name = name.toLowerCase().replace(" ", "");

  const response = await fetch("./data.json");
  const data = await response.json();
  switch (name) {
    case "delhi":
      document.getElementById("city").innerHTML = data[0].delhi.city;
      document.getElementById("VisitingPlace").innerHTML =
        data[0].delhi.VisitingPlace;
      document.getElementById("park").innerHTML = data[0].delhi.park;

      var n = 0;
      function slider() {
        if (n == data[0].delhi.image.length - 1) {n = 0;}
        else {
        document.getElementById("image").src = data[0].delhi.image[n];
        n++;
        }
      }
      setInterval(slider, 2000);
      break;

    case "andhrapradesh":
      document.getElementById("city").innerHTML = data[0].andhrapradesh.city;
      document.getElementById("VisitingPlace").innerHTML =
        data[0].andhrapradesh.VisitingPlace;
      document.getElementById("park").innerHTML = data[0].andhrapradesh.park;
      var n = 0;
      
     function  sslider() {
        if (n == data[0].andhrapradesh.image.length - 1) {n = 0;}
        else {
          document.getElementById("image").src = data[0].andhrapradesh.image[n];
          n++;
        }
      }
      setInterval(sslider, 2000);
      break;
  }
}
getAPIData();
