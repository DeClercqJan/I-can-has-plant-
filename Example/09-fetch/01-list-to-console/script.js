/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here

  // Steps
  // Install SEVE + NODEJS + NPX in terminal
  // In terminal, go to file folder "example"
  // Type "npm run start", which activates the script in package.json to activate the local server
  // Type "npm run api"
  // Now you'll be able to access the database-file in localhost:3000/heroes (it's possible a different port is activated; you'll see this in terminal)
  // Run live preview of index.html and check console when clicking on button

  async function test() {
    // standaarddata voor moskou await fetch("http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=fac9676aa8de6252977e1a8672e861e2")
    // example await fetch("https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22")
    //  gent await fetch("https://api.openweathermap.org/data/2.5/weather?q=Gent,be&appid=fac9676aa8de6252977e1a8672e861e2")
    // await fetch("https://plantsdb.xyz/search?limit=100&fields=Genus,Species,AcceptedSymbol"
    // dit retourneert 100 elementen en ze hebben enkel de properties genus, Species, ... "https://plantsdb.xyz/search?limit=100&fields=Genus,Species,AcceptedSymbol"
    // await fetch("https://plantsdb.xyz/search?limit=100&genus=Hypericum&species=perforatum")

    await fetch(
      //  "https://trefle.io/api/plants?q=hypericum&token=cHRTbmY2RXNoVWVQSi9DYmpLTCt6QT09&originorigin=https://declercqjan.github.io/Startup-with-open-api/Example/09-fetch/01-list-to-console/index.html"
      // "https://trefle.io/api/species/144183?token=cHRTbmY2RXNoVWVQSi9DYmpLTCt6QT09&originorigin=https://declercqjan.github.io/Startup-with-open-api/Example/09-fetch/01-list-to-console/index.html"
      //    "https://trefle.io/api/species?duration=Perennial&common_name=Intermountain%20rubberweed&token=cHRTbmY2RXNoVWVQSi9DYmpLTCt6QT09&originorigin=https://declercqjan.github.io/Startup-with-open-api/Example/09-fetch/01-list-to-console/index.html"
      // "https://trefle.io/api/species?duration=Perennial&common_name=Intermountain%20rubberweed&token=cHRTbmY2RXNoVWVQSi9DYmpLTCt6QT09&originorigin=https://declercqjan.github.io/Startup-with-open-api/Example/09-fetch/01-list-to-console/index.html"
      // "https://trefle.io/api/species?scientific_name=Hypericum&token=cHRTbmY2RXNoVWVQSi9DYmpLTCt6QT09&originorigin=https://declercqjan.github.io/Startup-with-open-api/Example/09-fetch/01-list-to-console/index.html"
      
      // EENS IN MEERDERE STAPPEN BEKIJKEN
      // https://trefle.io/api/plants?q=Hypericum perforatum&token=cHRTbmY2RXNoVWVQSi9DYmpLTCt6QT09&originorigin=https://declercqjan.github.io/Startup-with-open-api/Example/09-fetch/01-list-to-console/index.html"
      // https://trefle.io/api/species/144279?token=cHRTbmY2RXNoVWVQSi9DYmpLTCt6QT09&originorigin=https://declercqjan.github.io/Startup-with-open-api/Example/09-fetch/01-list-to-console/index.html"

      // "https://trefle.io/api/plants?q=Hypericum&token=cHRTbmY2RXNoVWVQSi9DYmpLTCt6QT09&originorigin=https://declercqjan.github.io/Startup-with-open-api/Example/09-fetch/01-list-to-console/index.html"
      //"https://trefle.io/api/plants/144183?token=cHRTbmY2RXNoVWVQSi9DYmpLTCt6QT09&originorigin=https://declercqjan.github.io/Startup-with-open-api/Example/09-fetch/01-list-to-console/index.html"          )
      // "https://trefle.io/api/species?toxicity=slight&token=cHRTbmY2RXNoVWVQSi9DYmpLTCt6QT09&originorigin=https://declercqjan.github.io/Startup-with-open-api/Example/09-fetch/01-list-to-console/index.html")
      //  "https://my.plantnet.org/api"
      // "https://my-api.plantnet.org/v2/identify/all?api-key=2a10DxISupBCpFchETM9OpTIe"
      "https://my-api.plantnet.org/v2/species?api-key=2a10DxISupBCpFchETM9OpTIe"
    )
      .then(response => response.json())
      .then(data => {
        // Here's a list of repos!
        console.log(data);
      });

    //.then(response => console.log(response));

    /*
    fetch(
      `https://trefle.io/api/plants?q=hypericum&token=cHRTbmY2RXNoVWVQSi9DYmpLTCt6QT09&originorigin=https://declercqjan.github.io/Startup-with-open-api/Example/09-fetch/01-list-to-console/index.html`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        //  "Access-Control-Allow-Origin": "https://declercqjan.github.io/Startup-with-open-api/Example/09-fetch/01-list-to-console/index.html"
        },
        // credentials: "same-origin"
      }
    ).then(
      function(response) {
        response.status; //=> number 100–599
        response.statusText; //=> String
        response.headers; //=> Headers
        response.url; //=> String

        return response.text();
      },
      function(error) {
        error.message; //=> String
      }
    );
    */
    /*
     .then(ste => ste.json())
      .then(result => {
        console.log(result);
        // console.log(result.city)
        // console.log(result.list)
        // console.log(result.list.weather);
        /*
        result.list.forEach(element => {
            // console.log(element);
            console.log(element.weather)
            console.log(element.weather[0]);
            console.log(element.weather[0].main);
            console.log(element.weather[0].description);

        });
      });
*/
  }
  document.getElementById("run").addEventListener("click", test);

  /* You can grab your API KEY from your user profile at https://app.lexigram.io */
  var apiKey =
    "Bearer " +
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdSI6Imx4ZzphcGkiLCJzYyI6WyJrZzpyZWFkIiwiZXh0cmFjdGlvbjpyZWFkIl0sImFpIjoiYXBpOjYwMDk2NmRkLTk1ZDYtZDM1Mi1kMmE3LTljY2E5OThkODhmYSIsInVpIjoidXNlcjowMmRjMDYyMi1lZWMyLTllYjMtNmU5OS1hMWZhYThiNmMyNzIiLCJpYXQiOjE1NzQyNDIyNjN9.agvLPE5tXwBeG6I0kK6mquAGRMf7wGcwvM_gY3XFxLk";

  /*
 Entity extraction from a note sample.
*/
  function exampleEntityExtraction() {
    var text =
      "The patient was given some hydrocodone for control of her pain." +
      "The patient suffers from bulimia and eating disorder, bipolar disorder," +
      " and severe hypokalemia. She thinks her potassium might again be low.";
    var data = { text: text };
    var url = "https://api.lexigram.io/v1/extract/entities";

    var httpRequest = new XMLHttpRequest();
    httpRequest.open("POST", url, true);
    httpRequest.setRequestHeader("Content-Type", "application/json");
    httpRequest.setRequestHeader("Authorization", apiKey);
    httpRequest.onreadystatechange = function() {
      if (httpRequest.readyState != 4 || httpRequest.status != 200) {
        return;
      }
      var response = JSON.parse(httpRequest.responseText);

      /* For loop that inspects the response printing to console the extracted concepts.
       It prints the Lexigraph concept ID, the type of concepts extracted (problem, drug, etc)
       and the context (negation, speculation, ...) */
      for (var i = 0; i < response.matches.length; i++) {
        console.log(
          "Concept ID: ",
          response.matches[i].label + " types:",
          response.matches[i].types + " context: ",
          response.matches[i].contexts
        );
      }
    };
    httpRequest.send(JSON.stringify(data));
  }

  /*
 Entity highlight from a note sample.
*/
  function exampleHighlightEntities() {
    var text =
      "The patient was given some hydrocodone for control of her pain." +
      "The patient suffers from bulimia and eating disorder, bipolar disorder," +
      " and severe hypokalemia. She thinks her potassium might again be low.";
    var data = { text: text };
    var url = "https://api.lexigram.io/v1/highlight/entities";

    var httpRequest = new XMLHttpRequest();
    httpRequest.open("POST", url, true);
    httpRequest.setRequestHeader("Content-Type", "application/json");
    httpRequest.setRequestHeader("Authorization", apiKey);
    httpRequest.onreadystatechange = function() {
      if (httpRequest.readyState != 4 || httpRequest.status != 200) {
        return;
      }
      var response = JSON.parse(httpRequest.responseText);

      /* Returns the html formated text from a note sample */
      console.log("The Response with html format", response);
    };
    httpRequest.send(JSON.stringify(data.text));
  }

  /*
Keyword search of keyword diabetes
*/
  function exampleSearchConcepts() {
    var keyword = "diabetes";
    var url = "https://api.lexigram.io/v1/lexigraph/search?q=" + keyword;
    var httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", "url", true);
    httpRequest.setRequestHeader("authorization", apiKey);

    httpRequest.onreadystatechange = function() {
      if (httpRequest.readyState != 4 || httpRequest.status != 200) {
        return;
      }
      var response = JSON.parse(httpRequest.responseText);

      /* For loop that inspects the response printing to console the found search hits.
       It prints the hits found Lexigraph concept ID, the type of concepts extracted (problem, drug, etc) */
      for (var i = 0; i < response.conceptSearchHits.length; i++) {
        console.log(
          " id: " +
            response.conceptSearchHits[i].concept.id +
            " types: " +
            response.conceptSearchHits[i].concept.types
        ) +
          " label: " +
          response.conceptSearchHits[i].concept.label;
      }
    };
    httpRequest.send();
  }

  /*
  Concept IDs are returned by API calls like search and data extraction
  and the 'concepts' endpoint allows you to get more information about 
  that particular concept.
*/
  function exampleConcept() {
    /* This concept ID represents 'diabetes'. */
    var conceptGraphId = "lxg:49711bf9b46f"; /* concept Id for hearth failure*/
    var url = "https://api.lexigram.io/v1/lexigraph/concepts/" + conceptGraphId;
    var httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", url, true);
    httpRequest.setRequestHeader("authorization", apiKey);

    httpRequest.onreadystatechange = function() {
      if (httpRequest.readyState != 4 || httpRequest.status != 200) {
        return;
      }
      var response = JSON.parse(httpRequest.responseText);
      /*
       It prints the concept ID, the type of concepts extracted (problem, drug, etc) */
      console.log(
        "id ",
        response.id + " label:" + response.label + " types:" + response.types
      );
    };
    httpRequest.send();
  }

  /* Ancestors of the concept Id are returned */
  function exampleConceptAncestors() {
    var conceptGraphId = "lxg:49711bf9b46f"; /* concept Id for hearth failure*/
    var url =
      "https://api.lexigram.io/v1/lexigraph/concepts/" +
      conceptGraphId +
      "/ancestors";
    var httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", url, true);
    httpRequest.setRequestHeader("authorization", apiKey);

    httpRequest.onreadystatechange = function() {
      if (httpRequest.readyState != 4 || httpRequest.status != 200) {
        return;
      }
      var response = JSON.parse(httpRequest.responseText);

      /* For loop that inspects the response printing to console the found ancestors concepts.
       It prints the Lexigraph concept ID, the type of concepts extracted (problem, drug, etc)
     */
      for (var i = 0; i < response.results.length; i++) {
        console.log("id" + response.results[0].id + response.results[0].types);
      }
    };
    httpRequest.send();
  }

  /* Descendants of the concept Id are returned */
  function exampleConceptDescendants() {
    var conceptGraphId = "lxg:49711bf9b46f"; /* concept Id for hearth failure*/
    var url =
      "https://api.lexigram.io/v1/lexigraph/concepts/" +
      conceptGraphId +
      "/descendants";
    var httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", url, true);
    httpRequest.setRequestHeader("authorization", apiKey);

    httpRequest.onreadystatechange = function() {
      if (httpRequest.readyState != 4 || httpRequest.status != 200) {
        return;
      }
      var response = JSON.parse(httpRequest.responseText);

      /* For loop that inspects the response printing to console the found descendants concepts.
       It prints the Lexigraph concept ID, the type of concepts extracted (problem, drug, etc)
     */
      for (var i = 0; i < response.results.length; i++) {
        console.log("id" + response.results[0].id + response.results[0].types);
      }
    };
    httpRequest.send();
  }

  // The sequence of sample function calls for demo purposes */
  //exampleEntityExtraction();
  // exampleHighlightEntities();
  // exampleConcept();
  // exampleConceptAncestors();
  // exampleConceptDescendants();
  // exampleSearchConcepts();
})();
