console.log("test");

document.getElementById("run").addEventListener("click", function() {
  console.log("hallo, knop werkt");
  run_program();
});

function run_program() {
  identify_plant();
  get_toxicity();
  change_html();
}

function identify_plant() {
  console.log("identify plant function works");
}

function get_toxicity() {
  console.log("get toxicity function works");
}

function change_html() {
  console.log("change html function works");
}
