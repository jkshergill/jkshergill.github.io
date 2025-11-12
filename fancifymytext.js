// Initial test
// alert("Hello, world!");

function makeTextBigger() {
  alert("Hello, world!");
  let textArea = document.getElementById("textInput");
  textArea.style.fontSize = "24pt";
}

function applyStyle() {
  let textArea = document.getElementById("textInput");
  let fancy = document.getElementById("fancy");
  
  if (fancy.checked) {
    alert("FancyShmancy selected!");
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
  } else {
    alert("BoringBetty selected!");
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
  }
}

function mooifyText() {
  let textArea = document.getElementById("textInput");
  let text = textArea.value.toUpperCase();

  // Split text into sentences using the period as a delimiter
  let sentences = text.split(".");

  // Process each sentence, ignoring empty ones
  for (let i = 0; i < sentences.length; i++) {
    let sentence = sentences[i].trim();
    if (sentence.length > 0) {
      // Split sentence into words, add "-Moo" to the last word, then join
      let words = sentence.split(" ");
      words[words.length - 1] = words[words.length - 1] + "-Moo";
      sentences[i] = words.join(" ");
    }
  }

  // Join sentences back together, adding a period and space after each
  textArea.value = sentences.join(". ") + ".";
}

