let num = 0;

while (num <= 5) {
  const userInput = prompt("Ingresa un número mayor a 5:");
  num = parseInt(userInput);

  if (isNaN(num) || num <= 5) {
    alert("Por favor, ingresa un número mayor a 5");
  }
}

const randomArray = [];
for (let i = 0; i < num; i++) {
  let randomValue = Math.floor(Math.random() * 900) + 100;
  randomArray.push(randomValue);
}

console.log("Array original:", randomArray);

randomArray.sort((a, b) => b - a);
console.log("Array ordenado de forma descendente:", randomArray);

randomArray.sort((a, b) => a - b);
console.log("Array ordenado de forma ascendente:", randomArray);
