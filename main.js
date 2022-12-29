let allElements = document.querySelector("*");
let pageBody = document.querySelector("body");
let pageContainer = document.createElement("div");
allElements.style.cssText = "font-size:24px;";
pageBody.style.cssText = "margin:0;padding:0;";
pageContainer.className = "container";
pageContainer.style.cssText =
  "height:100vh;display:flex;flex-direction:column;position:relative";
// create black div
let blackDiv = document.createElement("div");
blackDiv.className = "black";
blackDiv.style.cssText = "background-color:#000;width:100%;flex:33.3333%;";
pageContainer.appendChild(blackDiv);
//create white div
let whiteDiv = document.createElement("div");
whiteDiv.className = "white";
whiteDiv.style.cssText =
  "background-color:#fff;width:100%;flex-basis:33.3333%;";
pageContainer.appendChild(whiteDiv);
//create green div
let greenDiv = document.createElement("div");
greenDiv.className = "green";
greenDiv.style.cssText =
  "background-color:green;width:100%;flex-basis:33.3333%;";
pageContainer.appendChild(greenDiv);

// create red triangle element
let redTriangle = document.createElement("div");
redTriangle.className = "red";
redTriangle.style.cssText =
  "position:absolute;border-width:50vh;border-style:solid;border-color:transparent transparent transparent red;left:0;top:0";
pageContainer.appendChild(redTriangle);

pageBody.appendChild(pageContainer);
