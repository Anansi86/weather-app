//Run an onClick or onSubmit that executes an Axios GET request to retrieve weather data from the API.
//If the request is unsuccessful, display a specific error message such as "Invalid Zip Code" or anything else that might come back from the API.
//when onclick run unHideMe
//state 
let object = {
    city: "",
    temperature: "",
    condition: "",
    otherInfo: "",
}

//function convertTemp(object) {
//  let farenheight = 0
//  farenheight = 9/5(object[1] - 273) + 32
//  return farenheight;

function temperatureConverter() {
  temperature = parseFloat(object.temperature);
  document.getElementById("col1").innerHTML=object.temperature + " °K";
  document.getElementById("col2").innerHTML=Math.round((temperature-273.15)*1.8)+32 + " °F";
  document.getElementById("col3").innerHTML=Math.round((temperature - 273.15)) + " °C";
} 

function displayWeatherData()  {
  document.getElementById("city").innerText = object.city
  temperatureConverter();
  document.getElementById("condition").innerText = object.condition
  //document.getElementById("otherInfo").innerText = object.otherInfo
  iconImg.setAttribute("src", "http://openweathermap.org/img/wn/" + object.otherInfo + "@2x.png");
  //temperatureConverter()
}

function updateState(data) {
  object.city = data.name
  object.temperature = data.main.temp
  object.condition = data.weather[0].main
  object.otherInfo = data.weather[0].icon
  displayWeatherData()
}

         
async function getWeatherStats(url) {
    try {
        const response = await axios.get(url);  
        console.log(response.data);
        updateState(response.data);
    } catch (error) {

    }
}

// <form class="form-inline">
let inputForm = document.createElement("form");
inputForm.setAttribute("class", "form-inline");
document.getElementById('main').appendChild(inputForm);

// <div class="form-group mx-sm-3 mb-2">
let divInsideForm = document.createElement("div");
divInsideForm.setAttribute("class", "form-group mx-sm-3 mb-2");
inputForm.appendChild(divInsideForm);

// <label for="inputZipcode" class="sr-only">Zipcode</label>
let zipcodeInputLabel = document.createElement("label");
zipcodeInputLabel.setAttribute("for", "inputZipcode");
zipcodeInputLabel.setAttribute("class", "sr-only");
divInsideForm.appendChild(zipcodeInputLabel);

// <input type="text" class="form-control" id="inputZipcode" placeholder="Enter zipcode">
let zipcodeInput = document.createElement("input");
zipcodeInput.setAttribute("type", "text");
zipcodeInput.setAttribute("class", "form-control");
zipcodeInput.setAttribute("id", "inputZipcode");
zipcodeInput.setAttribute("placeholder", "Enter zipcode");
divInsideForm.appendChild(zipcodeInput);

// <button type="submit" class="btn btn-primary mb-2">Check Weather</button>
let buttonInput = document.createElement("button");
buttonInput.setAttribute("type", "submit");
buttonInput.setAttribute("id", "btn")
buttonInput.setAttribute("class", "btn btn-primary mb-2");
buttonInput.innerText = "peanutbutter weather time!";
inputForm.appendChild(buttonInput);

//<div id="results"></div>
let  result = document.createElement("div");
result.setAttribute("id", "results");
inputForm.appendChild(result);

//<div class="card">
const headerTitles = ["City", "Temperature", "Condition", "Other Info" ]
const bodyIds = ["city", "temperature", "condition", "otherInfo"]

for (var i = 0; i < 4; i++) {
  
  let card = document.createElement("div");
  card.setAttribute("class", "card");
  card.setAttribute("id", "card");
  result.appendChild(card);

  //<div class="card-header">
  let cardHeader = document.createElement("div");
  cardHeader.setAttribute("class", "card-header");
  cardHeader.innerText = headerTitles[i];
  card.appendChild(cardHeader);

  //<div class="card-body"></div>
  let cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card-body");
  card.appendChild(cardBody);

  // make a loop for columns in temp card
  if (i === 1) {
    
    //<div class="row"></div>
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    cardBody.appendChild(row);

    //<div class="col"></div>
    let col = document.createElement("div");
    col.setAttribute("class", "col");
    col.setAttribute("id", "col1")
    row.appendChild(col); 
    document.getElementById("col1").innerText = "hello"

    let col2 = document.createElement("div");
    col2.setAttribute("class", "col");
    col2.setAttribute("id", "col2")
    row.appendChild(col2); 
    document.getElementById("col2").innerText = "hi"

    let col3 = document.createElement("div");
    col3.setAttribute("class", "col");
    col3.setAttribute("id", "col3")
    row.appendChild(col3); 
    document.getElementById("col3").innerText= "bye"
  }

  //<h1 class="card-title">Special title treatment</h1>
  let placeHolder = document.createElement("h1");
  placeHolder.setAttribute("class", "card-title");
  cardBody.setAttribute("id", bodyIds[i]);
  cardBody.appendChild(placeHolder);
}

let iconImg = document.createElement("img")
document.getElementById("otherInfo").appendChild(iconImg);


// document.getElementById("btn").addEventListener("click", unHideMe);
document.getElementById('results').style.display ="none";

function unHideMe(e) {
  // Next step:
  // Read the zip code from the text field
  let zipcode = document.getElementById("inputZipcode").value;
  // Then put the zip code from the text field into the URL below:
  getWeatherStats ("https://api.openweathermap.org/data/2.5/weather?zip="+zipcode+",&appid=b3c018f0dfc43f2b89e60d312fecae01");
  document.getElementById("results").style.display = "block";
  e.preventDefault();

}

document.getElementById("btn").addEventListener("click", unHideMe);
