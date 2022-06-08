const trianguloIsoceles = require("../src/trianguloIsoceles");

test("Verifica se todos os valores säo validos", () => {
  expect(trianguloIsoceles(1, -2, 2)).toStrictEqual("invalido");
  expect(trianguloIsoceles(-1, 2, 2)).toStrictEqual("invalido");
  expect(trianguloIsoceles(1, 2, -2)).toStrictEqual("invalido");
});
test("Verifica se a funçao retorna que o triangulo é isoceles", () => {
  expect(trianguloIsoceles(2, 2, 3)).toStrictEqual("isoceles");
});
test("Verifica se a funçao retorna que o triangulo não é isoceles", () => {
  expect(trianguloIsoceles(3, 4, 5)).toStrictEqual(false);
});

// test("Verifica se todos os valores säo validos", () => {
//   expect(trianguloIsoceles(1, -2, 2)).toStrictEqual("invalido");
//   expect(trianguloIsoceles(-1, 2, 2)).toStrictEqual("invalido");
//   expect(trianguloIsoceles(1, 2, -2)).toStrictEqual("invalido");
//   expect(trianguloIsoceles(0, 0, 0)).toStrictEqual("invalido");
//   expect(trianguloIsoceles(1, 1, 0)).toStrictEqual("invalido");
//   expect(trianguloIsoceles(1, 0, 1)).toStrictEqual("invalido");
//   expect(trianguloIsoceles(0, 1, 1)).toStrictEqual("invalido");
// });
// test("Verifica se a funçao retorna que o triangulo é isoceles", () => {
//   expect(trianguloIsoceles(2, 2, 3)).toStrictEqual("isoceles");
//   expect(trianguloIsoceles(3, 2, 2)).toStrictEqual("isoceles");
//   expect(trianguloIsoceles(3, 2, 3)).toStrictEqual("isoceles");
// });
// test("Verifica se a funçao retorna que o triangulo não é isoceles", () => {
//   expect(trianguloIsoceles(3, 3, 3)).toStrictEqual(false);
//   expect(trianguloIsoceles(3, 4, 5)).toStrictEqual(false);
// });
