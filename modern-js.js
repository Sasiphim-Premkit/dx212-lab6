function greet(name, faculty) {
  return "สวัสดี " + name + " จากคณะ " + faculty + "!";
}

const greet_modern = (name, faculty) => `สวัสดี ${name} จากคณะ ${faculty}!`;

console.log(greet("mm","it"));
console.log(greet_modern("mm","it"));