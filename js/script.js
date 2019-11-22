// console.log("test javascript file");

document.getElementById("run").addEventListener("click", function() {
  // console.log("hallo, knop werkt");
  run_program();
});

let plant_name = "plant_name (variable to be populated)";
// let plant_toxicity_original = "plant_toxicty (variable to be populated)";
let plant_toxicity_original = "";
console.log(plant_toxicity_original);

// MOET IK NIET ZORGEN DAT DIT IN DE JUISTE VOLGORDE LOOPT MET ASYNCH? KAN IK DAT MET TIMESTAMP CONTROLEREN?
function run_program() {
  identify_plant();
  get_toxicity();
  change_html();
}

async function identify_plant() {
  // console.log("identify plant function works");
  // TO DO: CHECKEN OF IMAGE URL ZONDER HTTPS OOK WERKT OF NIET; ZO NOPDIG AANPASSEN IN PLACEHOLDER
  let image_url =
    "https://res.cloudinary.com/bloomnation/c_pad,d_vendor:global:catalog:product:image.png,f_auto,fl_preserve_transparency,q_auto/v1496901561/vendor/731/catalog/product/2/0/20170607105718_file_593884ce493ab.jpg";
  let organ = "leaf";
  await fetch(
    `https://my-api.plantnet.org/v2/identify/all?images=${image_url}&organs=${organ}&include-related-images=false&lang=en&api-key=2a10DxISupBCpFchETM9OpTIe`
  )
    .then(response => response.json())
    .then(data => {
      // console.log(data);
      // console.log(data.results);
      // console.log(data.results[0]);
      // console.log(data.results[0].species);
      // console.log(data.results[0].species.family);
      // console.log(data.results[0].species.family.scientificNameWithoutAuthor);
      family_scientificNameWithoutAuthor =
        data.results[0].species.family.scientificNameWithoutAuthor;
      // console.log(data.results[0].species.genus.scientificNameWithoutAuthor);
      genus_scientificNameWithoutAuthor =
        data.results[0].species.genus.scientificNameWithoutAuthor;
      // console.log(family_scientificNameWithoutAuthor);
      // console.log(genus_scientificNameWithoutAuthor);
      plant_name = `${genus_scientificNameWithoutAuthor} ${family_scientificNameWithoutAuthor}`;
      console.log(plant_name);
    });
}

async function get_toxicity() {
  // console.log("get toxicity function works");
  // TEST OF HET WERKT, LOS VAN DE VOLGORDE VAN FUNCTIES
  let plant_name = "Hypericum perforatum";
  let plant_id = 144279;
  // TO DO: OPLETTEN DAT ER OOK WAT GETOOND WORDT BV VOOR "phalaenopsis orchidaceae"
  /*
  await fetch(
    // `https://trefle.io/api/plants?q=${plant_name}&token=cHRTbmY2RXNoVWVQSi9DYmpLTCt6QT09&origin=https://declercqjan.github.io/Startup-with-open-api/`
    `https://trefle.io/api/species?q=${plant_name}&token=cHRTbmY2RXNoVWVQSi9DYmpLTCt6QT09&origin=https://declercqjan.github.io/Startup-with-open-api`
  )
    .then(response => response.json())
    .then(data => {
      console.log(data);
      console.log(data[0]);
      console.log(data[0].id);
      plant_id = data[0].id;
    });
    */
  await fetch(
    // "https://trefle.io/api/plants/144279"
    `https://trefle.io/api/plants/${plant_id}?token=cHRTbmY2RXNoVWVQSi9DYmpLTCt6QT09&origin=https://declercqjan.github.io/Startup-with-open-api`
  )
    .then(response => response.json())
    .then(data => {
      // console.log(data);
      console.log(data.main_species.specifications);
      console.log(data.main_species.specifications.toxicity);
      plant_toxicity_original = data.main_species.specifications.toxicity;
    });
}

function change_html() {
  // console.log("change html function works");
  console.log(plant_name);
  console.log(plant_toxicity_original);
  plant_toxicity_final = "";
  // DE BOEL DEV MET ZIJN PARAGRAFEN NOG LEEG MAKEN
  if ((plant_toxicity_original = "null")) {
    // console.log("indeed null. need to catch this with some error message");
    plant_toxicity_final = "not known";
    console.log(plant_toxicity_final);
  } else {
    plant_toxicity_final = plant_toxicity_original;
  }

  var target_p_populated = document.createElement("p");
  target_p_populated.id = "target_p_populated";
  var target_p_populated_content = document.createTextNode(`The toxicity of ${plant_name} is ${plant_toxicity_final}`);
  target_p_populated.appendChild(target_p_populated_content);
  var target_p = document.getElementById("target_p");
  var target = target_p.parentNode;
  target.replaceChild(target_p_populated, target_p);
  // DEZE RESETTEN OPDAT TELKENS ALS JE KLIKT OP DE KNOP DE PARAGRAAF VERVANGEN WORDT IN PLAATS VAN DAT ER EEN EXTRA PARAGRAAF GECREEERD WORDT
  target_p_populated.id = "target_p";

  // let result_p = document.createElement("p");
  // let result_text = result_p.textContent = `The toxicity of ${plant_name} is ${plant_toxicity_final} </br>`;
  // result = result_p.appendChild(result_text);
  // document.getElementById("target").appendChild(result);

  /*
  let target = document.getElementById("target");
  console.log(target.childNodes);
  if ((target.childNodes = "")) {
    console.log("nope, target doens't have text content");
  } else {
    console.log("yes indeed, target already has text content");
  }
  */

  // let para = document.createElement("p");
  // para.textContent = `The toxicity of ${plant_name} is ${plant_toxicity_final}`;
  // target.replaceChild(para);
  // console.log(target.textContent);

  /* WILL BE COPYING THIS
var sp1 = document.createElement("span");

// Give it an id attribute called 'newSpan'
sp1.id = "newSpan";

// Create some content for the new element.
var sp1_content = document.createTextNode("new replacement span element.");

// Apply that content to the new element
sp1.appendChild(sp1_content);

// Build a reference to the existing node to be replaced
var sp2 = document.getElementById("childSpan");
var parentDiv = sp2.parentNode;

// Replace existing node sp2 with the new span element sp1
parentDiv.replaceChild(sp1, sp2);
*/

}
