// Get the template element
let template = document.getElementById("header");
// Clone the template content
let clone = template.content.cloneNode(true);
// Insert the clone into the document body
// document.body.appendChild(clone);
document.body.insertAdjacentHTML(clone);