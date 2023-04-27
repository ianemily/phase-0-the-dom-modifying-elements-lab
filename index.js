document.querySelector("#main").remove();

const newHeader = document.createElement("h1");

newHeader.setAttribute("id", "victory");

const name = "John"; 
newHeader.textContent = `${name} is the champion`;

document.body.appendChild(newHeader);
