document.getElementById("run").addEventListener("click", function() {
  document.getElementById("collapseExample").style.display = "none";
  run_program();
});

let plant_name = "plant_name (variable to be populated)";
let plant_id = 0;
let plant_toxicity_original = "";
let plant_toxicity_final = "";
let plant_score_original = 0;
let plant_score_final = 0;

// MOET IK NIET ZORGEN DAT DIT IN DE JUISTE VOLGORDE LOOPT MET ASYNCH? KAN IK DAT MET TIMESTAMP CONTROLEREN?
function run_program() {
  //identify_plant()
  // get_plant_name()
  // get_plant_name_genus()
  get_plant_name_full()
    // get_plant_id_data()
    .then(get_plant_id_data)
    // .then(get_plant_id)
    .then(get_toxicity)
    .then(change_html);
}

// async function identify_plant() {
/*
async function get_plant_name_genus() {
  let image_url_original = document.getElementById("image_url").value;
  console.log(image_url_original);
  // IS NODIG OM URL GOED TE KRIJGEN DAT SERVER HET KAN BEGRIJPEN
  let image_url_final = encodeURI(image_url_original);
  console.log(image_url_final);
  let organ = document.forms[0].elements["organ_choice"].value;
  console.log(
    `https://my-api.plantnet.org/v2/identify/all?images=${image_url_final}&organs=${organ}&include-related-images=false&lang=en&api-key=2a10DxISupBCpFchETM9OpTIe`
  );
  return fetch(
    `https://my-api.plantnet.org/v2/identify/all?images=${image_url_final}&organs=${organ}&include-related-images=false&lang=en&api-key=2a10DxISupBCpFchETM9OpTIe`
    // DEZE WERKT WEL "https://my-api.plantnet.org/v2/identify/all?images=http%3A%2F%2Fwww.southeasternflora.com%2Fimages%2Fmedium%2FCicuta%2520maculata%2520flower%25201.JPG&organs=flower&include-related-images=false&lang=en&api-key=2a10DxISupBCpFchETM9OpTIe"
  )
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // HIER ENKEL DE GENUS
      genus_scientificNameWithoutAuthor =
        data.results[0].species.genus.scientificNameWithoutAuthor;
      plant_name_genus = genus_scientificNameWithoutAuthor;
      console.log(plant_name_genus);
    });
}
*/

async function get_plant_name_full() {
  // let image_url = "https://res.cloudinary.com/bloomnation/c_pad,d_vendor:global:catalog:product:image.png,f_auto,fl_preserve_transparency,q_auto/v1496901561/vendor/731/catalog/product/2/0/20170607105718_file_593884ce493ab.jpg";
  let image_url_original = document.getElementById("image_url").value;
  console.log(image_url_original);
  // IS NODIG OM URL GOED TE KRIJGEN DAT SERVER HET KAN BEGRIJPEN
  let image_url_final = encodeURI(image_url_original);
  console.log(image_url_final);
  let organ = document.forms[0].elements["organ_choice"].value;
  console.log(
    `https://my-api.plantnet.org/v2/identify/all?images=${image_url_final}&organs=${organ}&include-related-images=false&lang=en&api-key=2a10DxISupBCpFchETM9OpTIe`
  );
  return fetch(
    `https://my-api.plantnet.org/v2/identify/all?images=${image_url_final}&organs=${organ}&include-related-images=false&lang=en&api-key=2a10DxISupBCpFchETM9OpTIe`
    // DEZE WERKT WEL "https://my-api.plantnet.org/v2/identify/all?images=http%3A%2F%2Fwww.southeasternflora.com%2Fimages%2Fmedium%2FCicuta%2520maculata%2520flower%25201.JPG&organs=flower&include-related-images=false&lang=en&api-key=2a10DxISupBCpFchETM9OpTIe"
  )
    .then(response => response.json())
    .then(data => {
      console.log(data);
      //family_scientificNameWithoutAuthor = data.results[0].species.family.scientificNameWithoutAuthor;
      genus_scientificNameWithoutAuthor =
        data.results[0].species.genus.scientificNameWithoutAuthor;
      // ENKEL GENUS
      plant_name_genus = genus_scientificNameWithoutAuthor;
      console.log(plant_name_genus);
      // PROBLEMEN MET DE 2 NAMEN SAMEN
      // plant_name_full = `${genus_scientificNameWithoutAuthor} ${family_scientificNameWithoutAuthor}`;
      plant_name_full = data.results[0].species.scientificNameWithoutAuthor;
      console.log(plant_name_full);
      plant_score_original = data.results[0].score;
      console.log(plant_score_original);
      console.log(typeof plant_score_original);
    });
}

// DEZE NOG IN GET TOXICITY STEKEN?
// TEST OF HET WERKT, LOS VAN DE VOLGORDE VAN FUNCTIES
async function get_plant_id_data() {
  // plant_name_full ="toxicodendron radicans"
  // console.log(`${plant_name_full} is handmatig gezet om verder te kunnen werken na de 5à max limiet van planetnet`)
  // plant_name_genus = "millefolium";
  // console.log(
  // `${plant_name_genus} is handmatig gezet om verder te kunnen werken na de 5à max limiet van planetnet`
  // );
  // plant_name_full = "Achillea millefolium"
  return fetch(
    // `https://trefle.io/api/plants?q=${plant_name}&token=cHRTbmY2RXNoVWVQSi9DYmpLTCt6QT09&origin=https://declercqjan.github.io/Startup-with-open-api/`
    // `https://trefle.io/api/species?q=${plant_name_full}&token=cHRTbmY2RXNoVWVQSi9DYmpLTCt6QT09&origin=https://declercqjan.github.io/Startup-with-open-api`
    `https://trefle.io/api/species?scientific_name=${plant_name_full}&token=cHRTbmY2RXNoVWVQSi9DYmpLTCt6QT09&origin=https://declercqjan.github.io/Startup-with-open-api`
  )
    .then(response => response.json())
    .then(data => {
      console.log(data);
      if (data.length == 0) {
        console.log(
          "geen plant gevonden in de database van trefle.io met die naam"
        );

        console.log(plant_score_original);
        plant_score_final =
          parseFloat(plant_score_original * 100).toFixed(2) + "%";
        console.log(plant_score_final);

        var target_populated_score = document.createElement("p");
        target_populated_score.id = "target_populated_score";
        var target_populated_score_content = document.createTextNode(
          `The certainty score that indeed the picture is one of ${plant_name_full} is ${plant_score_final}`
        );
        target_populated_score.appendChild(target_populated_score_content);

        var target_populated_error = document.createElement("p");
        target_populated_error.id = "target_populated_error";
        var target_populated_error_content = document.createTextNode(
          `Unfortunately, ${plant_name_full} is not present in the database. You may want to manually use a search Engine`
        );
        target_populated_error.appendChild(target_populated_error_content);

        var target_div = document.createElement("div");
        target_div.appendChild(target_populated_score);
        target_div.appendChild(target_populated_error);

        var target = document.getElementById("target");
        var target_parent = target.parentNode;
        target_parent.replaceChild(target_div, target);

        // DEZE RESETTEN OPDAT TELKENS ALS JE KLIKT OP DE KNOP DE PARAGRAAF VERVANGEN WORDT IN PLAATS VAN DAT ER EEN EXTRA PARAGRAAF GECREEERD WORDT
        target_div.id = "target";
        // DEZE OM OOK WAT CSS BOOTSTRAP TE HEBBEN
        target_div.className = "col-12 col-md-6 offset-md-3";
      } else {
        plant_id_data = data;
        console.log(data[0]);
        console.log(data[0].id);
        plant_id = data[0].id;
      }
    });
}

async function get_toxicity() {
  // VRAAG!!! MOET IK NIET ANDERE DATABASE AANSPREKEN? NOG S TESTEN MET https://en.wikipedia.org/wiki/Achillea_millefolium#/media/File:Yarrow_(Achillea_millefolium).jpg
  console.log(plant_id);
  console.log(typeof plant_id);
  // MANIER OM DE BOEL STOP TE ZETTEN ALS ER GEEN DERGELIJKE ELEMENT MET DIE NAAM IN TREFLE.IO ZIT. plant_id HEB IK IN HET BEGIN OP 0 GEZET
  if (plant_id == 0) {
    console.log(
      "geen verdere request werden gemaakt, aangezien er niet zo'n element in de database zit"
    );
  } else {
    return fetch(
      `https://trefle.io/api/plants/${plant_id}?token=cHRTbmY2RXNoVWVQSi9DYmpLTCt6QT09&origin=https://declercqjan.github.io/Startup-with-open-api`
    )
      .then(response => response.json())
      .then(data => {
        console.log(data);
        data_toxicity = data;
        // VERSCHILLENDE RESPONSES OPVANGEN VOOR BV. https://trefle.io/api/plants/188525?token=cHRTbmY2RXNoVWVQSi9DYmpLTCt6QT09& VERSUS https://trefle.io/api/plants/144279?token=cHRTbmY2RXNoVWVQSi9DYmpLTCt6QT09&
        if (data_toxicity.main_species.specifications == null) {
          console.log("specifications is null");
          plant_toxicity_original = null;
          plant_edibility_original = null;
        } else {
          console.log(data.main_species.specifications);
          console.log(data.main_species.specifications.toxicity);
          plant_toxicity_original = data.main_species.specifications.toxicity;
          console.log(data.main_species.products);
          console.log(data.main_species.products.palatable_human);
          plant_edibility_original = data.main_species.products.palatable_human;
        }
      });
  }
}

function change_html() {
  // MANIER OM DE BOEL STOP TE ZETTEN ALS ER GEEN DERGELIJKE ELEMENT MET DIE NAAM IN TREFLE.IO ZIT. plant_id HEB IK IN HET BEGIN OP 0 GEZET
  if (plant_id == 0) {
    console.log(
      "geen toxicity en dergelijke weer te geven, aangezien er niet zo'n element in de database zit"
    );
  } else {
    // VERTALEN VAN DATABASE NAAR TEKST
    console.log(plant_score_original);
    plant_score_final = parseFloat(plant_score_original * 100).toFixed(2) + "%";
    console.log(plant_score_final);
    if (plant_toxicity_original === null) {
      console.log(
        "indeed toxicity is null. need to catch this with some error message"
      );
      plant_toxicity_final = "not known";
      console.log(plant_toxicity_final);
    } else {
      plant_toxicity_final = plant_toxicity_original;
      console.log(plant_toxicity_final);
    }
    if (plant_edibility_original === null) {
      console.log(
        "indeed human edibility is null. need to catch this with some error message"
      );
      plant_edibility_final = "not known";
      console.log(plant_edibility_final);
    } else {
      plant_edibility_final = plant_edibility_original;
      console.log(plant_toxicity_original);
    }
    // VERVANGT DE DIV TARGET TELKENS OP IETS GEKLIKT WORDT
    var target_populated_score = document.createElement("p");
    target_populated_score.id = "target_populated_score";
    var target_populated_score_content = document.createTextNode(
      `The certainty score that indeed the picture is one of ${plant_name_full} is ${plant_score_final}`
    );
    target_populated_score.appendChild(target_populated_score_content);

    var target_populated_toxicity = document.createElement("p");
    target_populated_toxicity.id = "target_populated_toxicity";
    var target_populated_toxicity_content = document.createTextNode(
      `The toxicity of ${plant_name_full} is ${plant_toxicity_final}`
    );
    target_populated_toxicity.appendChild(target_populated_toxicity_content);

    var target_populated_edibility = document.createElement("p");
    target_populated_edibility.id = "target_populated_edibility";
    var target_populated_edibility_content = document.createTextNode(
      `The edibility of ${plant_name_full} is ${plant_edibility_final}`
    );
    target_populated_edibility.appendChild(target_populated_edibility_content);

    var target_div = document.createElement("div");
    target_div.appendChild(target_populated_score);
    target_div.appendChild(target_populated_toxicity);
    target_div.appendChild(target_populated_edibility);

    var target = document.getElementById("target");
    var target_parent = target.parentNode;
    target_parent.replaceChild(target_div, target);

    // DEZE RESETTEN OPDAT TELKENS ALS JE KLIKT OP DE KNOP DE PARAGRAAF VERVANGEN WORDT IN PLAATS VAN DAT ER EEN EXTRA PARAGRAAF GECREEERD WORDT
    target_div.id = "target";
    // DEZE OM OOK WAT CSS BOOTSTRAP TE HEBBEN
    target_div.className = "col-12 col-md-6 offset-md-3";
  }
}
