let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let rows = 20;
let cols = 20;
let celWidth = canvas.width / cols;
let celHeight = canvas.height / rows;

let direction;

let snake = [
    { x: 19, y: 3 },
]
let food;

document.addEventListener('keydown', KeyDown);

PlaceFood();

setInterval(GameLoop, 200);

draw();


function draw() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';

    snake.forEach(part => add(part.x, part.y))

    ctx.fillStyle = 'green';
    add(food.x, food.y);

    requestAnimationFrame(draw);
}

function add(x, y) {
    ctx.fillRect(x * celWidth, y * celHeight, celWidth - 1, celHeight - 1);
}

function GameLoop() {
    if (direction == 'LEFT') {
        snake[0].x--;
    }
    if (direction == 'RIGHT') {
        snake[0].x++;
    }
    if (direction == 'UP') {
        snake[0].y--;
    }
    if (direction == 'DOWN') {
        snake[0].y++;
    }

    if (snake[0].x == food.x && snake[0].y == food.y) {
        PlaceFood();
    }
}

function KeyDown(e) {
    if (e.keyCode == 37 || e.keyCode == 65) {
        direction = 'LEFT';
    }
    if (e.keyCode == 39 || e.keyCode == 68) {
        direction = 'RIGHT';
    }
    if (e.keyCode == 38 || e.keyCode == 87) {
        direction = 'UP';
    }
    if (e.keyCode == 40 || e.keyCode == 83) {
        direction = 'DOWN';
    }
}


function PlaceFood() {
    let randomX = Math.floor(Math.random() * cols);
    let randomY = Math.floor(Math.random() * rows);
    food = {
        x: randomX,
        y: randomY
    };
}


