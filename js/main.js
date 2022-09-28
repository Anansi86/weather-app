

let weatherStats = [];

async function getWeatherStats(url) {
    try {
        const response = await axios.get(url);  
        console.log(response.data);  
    } catch (error) {

    }
}

getWeatherStats ('https://api.openweathermap.org/data/2.5/weather?zip=40517,&appid=b3c018f0dfc43f2b89e60d312fecae01');

//


var inputForm = `
<h1>Weather App</h1>

<form class="form-inline">
<div class="form-group mx-sm-3 mb-2">
  <label for="inputPassword2" class="sr-only">Zipcode</label>
  <input type="text" class="form-control" id="inputPassword2" placeholder="Enter zipcode">
</div>
<button type="submit" class="btn btn-primary mb-2">Check Weather</button>
</form>
<div id="results">
    <div class="card">
        <div class="card-header">
          City
        </div>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
         Temperatur
        </div>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
        </div>
      </div> <div class="card">
        <div class="card-header">
          Condition
        </div>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
        </div>
      </div> <div class="card">
        <div class="card-header">
          Other Info
        </div>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
        </div>
      </div>
</div>
`;

document.getElementById("main").innerHTML = inputForm;
document.getElementById('results').style.display ="none";
// var tag = document.createElement("input");
//    tag.classList.add("mystyle");
//    var text = document.createTextNode("Do I is the best e-learning platform");
//    tag.appendChild(text);
//    var element = document.getElementById("main");
//    element.appendChild(tag);
  
//    function myFunction() {
//     var element = document.getElementById("myDIV");
//     element.classList.add("mystyle");
//   }
  