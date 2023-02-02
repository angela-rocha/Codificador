
  var textInput = document.querySelector("#input-texto");
  var outinput = document.querySelector("#output");

  function criptografar() {
    var textou = textInput.value;
    var texto = textou.toLowerCase();

    var resultCripto = texto
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");

    document.getElementById("output").innerHTML =
      '<textarea readonly id="input">' +
      resultCripto +
      "</textarea>" +
      '<div class="container-btn"><button class="btn-copiar" id="copiar" onclick="copiar()">Copy</button></div>';
  }

  function descriptografar() {
    var textou = textInput.value;
    var texto = textou.toLowerCase();

    var resultDescripto = texto
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");

    document.getElementById("output").innerHTML =
      '<textarea readonly id="input">' +
      resultDescripto +
      "</textarea>" +
      '<div class="container-btn"><button class="btn-copiar" id="copiar" onclick="copiar()">Copy</button></div>';
  }

  function copiar() {
    var textoCop = document.getElementById("input");

    textoCop.select();
    document.execCommand("copiar");
    // alert("The message has been successfully copied!")
  }
