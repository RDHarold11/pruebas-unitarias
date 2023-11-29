const express = require("express");
const PORT = 5000;
const app = express();

const sumaDosNumeros = require("./utils");

app.get("/", (req, res) => {
  const resultado = sumaDosNumeros();
  res.send(`Resultado de la nueva (final) suma a evaluar: ${resultado}`);
});

app.listen(PORT, () => {
  console.log("Server running");
});
