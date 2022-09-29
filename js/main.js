

let weatherStats = [];

async function getWeatherStats(url) {
    try {
        const response = await axios.get(url);  
        console.log(response.data);  
    } catch (error) {

    }
}

getWeatherStats ('https://api.openweathermap.org/data/2.5/weather?zip=40517,&appid=b3c018f0dfc43f2b89e60d312fecae01');

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
buttonInput.setAttribute("class", "btn btn-primary mb-2");
buttonInput.innerText = "Submit";
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

  if (i === 1) {
    
    //<div class="row"></div>
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    cardBody.appendChild(row);

    //<div class="col"></div>
    let col = document.createElement("div");
    col.setAttribute("class", "col");
    row.appendChild(col);

  }

  //<h5 class="card-title">Special title treatment</h5>
  let placeHolder = document.createElement("h1");
  placeHolder.setAttribute("class", "card-title");
  cardBody.appendChild(placeHolder);
}


 document.getElementById('results').style.display ="none";
  //to show an element
function unHideMe() {
    document.getElementById("results").style.display = "block";
}  
