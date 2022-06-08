module.exports = trianguloIsoceles = (a, b, c) => {
  if (a <= 0 || b <= 0 || c <= 0) {
    return "invalido";
  } else if (
    (a === b && b !== c) ||
    (a !== b && b === c) ||
    (a === c && b !== a)
  ) {
    return "isoceles";
  } else {
    return false;
  }
};
