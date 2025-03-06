var edad = 12;

if (edad > -1 && edad <= 12) {
  console.log("eres un niño");
} else if (edad > 12 && edad <= 19) {
  console.log("eres un adolescente");
} else if (edad > 19 && edad <= 64) {
  console.log("eres un adulto");
} else if (edad > 64) {
  console.log("eres un adulto mayor");
} else {
  console.log("edad erronea");
}
