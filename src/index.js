import "./styles.css";

// Erzeugt das HTML-Dokument dynamisch
document.body.innerHTML = `
  <!DOCTYPE html>
  <html>
  <head>
    <title>Trink-Würfelspiel</title>
    <style>
      body {
        text-align: center;
        font-family: Arial, sans-serif;
      }
    </style>
  </head>
  <body>
    <h1>IBS-Trinkspiel</h1>
    <button id="rollButton">Würfeln</button>
    <p id="result"></p>

    <script src="index.js"></script>
  </body>
  </html>
`;

// Funktion zum Würfeln
function rollDice() {
  var playerRoll = Math.floor(Math.random() * 6) + 1;
  var computerRoll = Math.floor(Math.random() * 6) + 1;

  var result = "Du hast eine " + playerRoll + " gewürfelt.<br>";
  result += "Der Computer hat eine " + computerRoll + " gewürfelt.<br><br>";

  if (playerRoll > computerRoll) {
    result += "Du gewinnst diese Runde!";
  } else if (computerRoll > playerRoll) {
    result += "Der Computer gewinnt diese Runde!";
  } else {
    result += "Unentschieden!";
  }

  document.getElementById("result").innerHTML = result;
}

// Ereignislistener für den Klick auf den Würfeln-Button
document.getElementById("rollButton").addEventListener("click", rollDice);
