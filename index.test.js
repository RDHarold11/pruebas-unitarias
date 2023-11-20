const sumaDosNumeros = require("./utils.js");

test("Comprobacion de la suma", () => {
  expect(sumaDosNumeros()).toBe(30);
});
