import "./styles.css";

// Erzeugt das HTML-Dokument dynamisch
document.body.innerHTML = `
  <!DOCTYPE html>
  <html>
  <head>
    <title>Würfelspiel</title>
    <style>
      body {
        text-align: center;
        font-family: Arial, sans-serif;
      }
      #cocktailImages {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
      }

      #cocktailImages img {
        width: 70px;
      }
    </style>
  </head>
  <body>
  <img src="https://www.ibs-ol.de/files/projektordner/static/logo.png" />
    <h1>IBS-Trinkspiel</h1>
    <button id="rollButton">Würfeln</button>
    <div id="cocktailImages"></div>

    <script src="index.js"></script>
  </body>
  </html>
`;

// Funktion zum Würfeln
function rollDice() {
  document.getElementById("cocktailImages").innerHTML = "";
  var roll = Math.floor(Math.random() * 6) + 1;

  for (let index = 0; index < roll; index++) {
    var img = document.createElement("img");
    img.src =
      "https://st2.depositphotos.com/2197868/7830/v/950/depositphotos_78306752-stock-illustration-shot-glass-hand-drawn.jpg";

    document.getElementById("cocktailImages").appendChild(img);
  }
}

// Ereignislistener für den Klick auf den Würfeln-Button
document.getElementById("rollButton").addEventListener("click", rollDice);

