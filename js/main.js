//Run an onClick or onSubmit that executes an Axios GET request to retrieve weather data from the API.
//If the request is unsuccessful, display a specific error message such as "Invalid Zip Code" or anything else that might come back from the API.
//when onclick run unHideMe

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

/*function temperatureConverter() {
  valNum = parseFloat(valNum);
  document.getElementById("temp").innerHTML=((valNum-273.15)*1.8)+32;
} */
function displayWeatherData()  {
  document.getElementById("cardiB").innerText = object.city
}

function updateState(data) {
  object.city = data.name
  object.temperature = data.main.temp
  object.condition = data.weather[0].main
  object.otherInfo = data.weather[0].icon
}

         
async function getWeatherStats(url) {
    try {
        const response = await axios.get(url);  
        console.log(response.data);
        updateState(response.data);
    } catch (error) {

    }
}

// getWeatherStats ('https://api.openweathermap.org/data/2.5/weather?zip=40419,&appid=b3c018f0dfc43f2b89e60d312fecae01');


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
const headerTitles= ["City", "Temperature", "Condition", "Other Info" ]

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
  //if (i === 1) {
    
    //<div class="row"></div>
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    cardBody.appendChild(row);

    //<div class="col"></div>
    let col = document.createElement("div");
    col.setAttribute("class", "col");
    row.appendChild(col);

 // }

  //<h5 class="card-title">Special title treatment</h5>
  let placeHolder = document.createElement("h1");
  placeHolder.setAttribute("class", "card-title");
  cardBody.appendChild(placeHolder);

}


// document.getElementById("btn").addEventListener("click", unHideMe);
document.getElementById('results').style.display ="none";

function unHideMe(e) {
  // Next step:
  // Read the zip code from the text field
  let zipcode = document.getElementById("inputZipcode").value;
  // Then put the zip code from the text field into the URL below:
  getWeatherStats ('https://api.openweathermap.org/data/2.5/weather?zip='+zipcode+',&appid=b3c018f0dfc43f2b89e60d312fecae01');
  document.getElementById("results").style.display = "block";
  e.preventDefault();

}

document.getElementById("btn").addEventListener("click", unHideMe);
