const fontSizeControl = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");


addEventListener("input", () => {
  
 
const fontSize = fontSizeControl.value;
  textSpan.style.fontSize = `${fontSize}px`;
});