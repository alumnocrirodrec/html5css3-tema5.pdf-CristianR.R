window.onload = function () {
const canvas = document.getElementById("lienzo");
const ctx = canvas.getContext("2d");

let snake = [{x: 50, y: 50}];
let dx = 10;
let dy = 0;

let food = {
x: Math.floor(Math.random() * 50) * 10,
y: Math.floor(Math.random() * 30) * 10
};

document.addEventListener("keydown", cambiarDireccion);

function cambiarDireccion(e) {
if (e.key === "ArrowUp") { dx = 0; dy = -10; }
if (e.key === "ArrowDown") { dx = 0; dy = 10; }
if (e.key === "ArrowLeft") { dx = -10; dy = 0; }
if (e.key === "ArrowRight") { dx = 10; dy = 0; }
}

function dibujar() {
ctx.clearRect(0, 0, canvas.width, canvas.height);

```
// comida
ctx.fillStyle = "red";
ctx.fillRect(food.x, food.y, 10, 10);

// serpiente
ctx.fillStyle = "green";
snake.forEach(p => ctx.fillRect(p.x, p.y, 10, 10));
```

}

function mover() {
let cabeza = {x: snake[0].x + dx, y: snake[0].y + dy};

```
// colisión paredes
if (cabeza.x < 0 || cabeza.y < 0 || cabeza.x >= 500 || cabeza.y >= 300) {
  alert("Game Over");
  snake = [{x: 50, y: 50}];
  return;
}

snake.unshift(cabeza);

// comer
if (cabeza.x === food.x && cabeza.y === food.y) {
  food = {
    x: Math.floor(Math.random() * 50) * 10,
    y: Math.floor(Math.random() * 30) * 10
  };
} else {
  snake.pop();
}
```

}

function loop() {
mover();
dibujar();
}

setInterval(loop, 100);
};
