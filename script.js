let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let rows = 20;
let cols = 20;
let celWidth = canvas.width / cols;
let celHeight = canvas.height / rows;

let direction;

snake = [{ x: Math.floor(cols / 2), y: Math.floor(rows / 2) }];
let food;
let foodCollected = false;



PlaceFood();

setInterval(GameLoop, 200);
document.addEventListener('keydown', KeyDown);
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

function ShiftSnake() {
    for (let i = snake.length - 1; i > 0; i--) {
        const part = snake[i];
        const lastPart = snake[i - 1];
        part.x = lastPart.x;
        part.y = lastPart.y;
    }
}

function GameLoop() {
    GameOver();

    if (foodCollected) {
        snake = [{ x: snake[0].x, y: snake[0].y }, ...snake];
        foodCollected = false;
    }

    ShiftSnake();

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
        foodCollected = true;
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

function GameOver() {
    let firstPart = snake[0];
    let otherPart = snake.slice(1);
    let duplicatePart = otherPart.find(part => part.x == firstPart.x && part.y == firstPart.y);
    if (snake[0].x < 0 || snake[0].x > cols - 1 || snake[0].y < 0 || snake[0].y > rows - 1 || duplicatePart) {
        snake = [{ x: Math.floor(cols / 2), y: Math.floor(rows / 2) }];
        PlaceFood();
        direction = "";
    }
}


