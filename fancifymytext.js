function makeBigger(){
  alert("Hello, World!");
  document.getElementById("userInput").style.fontSize = "24pt";
}

//funtion to handle style changes based on radio buttons
function applyStyles(){
  let textArea = document.getElementById("userInput");
  let isFancy = document.getElementById("fancy").checked;
  if(isFancy){
    alert("Adding some flair!");
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
  }
  else
  {
    alert("Back to basics.");
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
  }
    
  }
//function to uppercase text and add -Moo to sentences
function mooify(){
  let textArea = document.getElementById("userInput");
  let text = textArea.value.toUpperCase();

  //split text by periods to find sentence
  let parts = text.split(".");
   //Join parts back together with "-Moo".
  textArea.value = parts.join("-Moo").trim();
  //Note: if you want a specific "suffix feel, joining by "-Moo", works best for sentence.
  textArea.value = parts.join("-Moo.");
}
