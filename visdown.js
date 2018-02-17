window.onload = function () {

	// Start Marked Renderer
const renderer = new marked.Renderer();
marked.setOptions({
  renderer: renderer,
  gfm: true,
  tables: true,
});

const opts = {
  "mode": "vega-lite",
  "renderer": "svg",
  "actions": {export: true, source: false, editor: false}
};


//Render the vega-lite chart for each json spec
function _render(element) {
  let specs = element.getElementsByClassName('lang-vis')
  let num = specs.length;
  for (var i=0; i < num; i++) {
    let el = "#vis-" + i;
    let jsonSpec = YAML.parse(specs[i].textContent)
    console.log(jsonSpec)
    htmlString = "<div class='vega-embed' id='vis-" + i + "'></div>"
    specs[i].parentNode.insertAdjacentHTML('beforebegin', htmlString);
    specs[i].parentNode.style.display = 'none';
    vegaEmbed(el, jsonSpec, opts);
  };
};

// Convert from Markdown to HTML
let input = document.querySelector("#visdown-input");
let output = document.querySelector("#visdown-output");


function visdown(input, element) {
  console.log('visdown');
  let visdownText = input.innerHTML;
  element.innerHTML = marked(visdownText);
  _render(element);
}


 visdown(input, output)

}
