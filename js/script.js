console.log("test");

document.getElementById("run").addEventListener("click", function() {
  // console.log("hallo, knop werkt");
  run_program();
});

// MOET IK NIET ZORGEN DAT DIT IN DE JUISTE VOLGORDE LOOPT MET ASYNCH? KAN IK DAT MET TIMESTAMP CONTROLEREN?
function run_program() {
  let plant_name = "";
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
  plant_name = "Hypericum perforatum";
  // TO DO: OPLETTEN DAT ER OOK WAT GETOOND WORDT BV VOOR "phalaenopsis orchidaceae" 
  await fetch(
    // `https://trefle.io/api/plants?q=${plant_name}&token=cHRTbmY2RXNoVWVQSi9DYmpLTCt6QT09&origin=https://declercqjan.github.io/Startup-with-open-api/`
    `https://trefle.io/api/species?q=${plant_name}&token=cHRTbmY2RXNoVWVQSi9DYmpLTCt6QT09&origin=https://declercqjan.github.io/Startup-with-open-api`
  )
    .then(response => response.json())
    .then(data => {
      // Here's a list of repos!
      console.log(data);
    });
}

function change_html() {
  // console.log("change html function works");
}
