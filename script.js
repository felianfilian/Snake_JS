let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let rows = 20;
let cols = 20;
let celWidth = canvas.width / cols;
let celHeight = canvas.height / rows;

let snake = [
    { x: 2, y: 3 },
    { x: 3, y: 3 },
    { x: 4, y: 3 },
    { x: 4, y: 4 },
]
let food = { x: 5, y: 5 }

draw()

function draw() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';

    snake.forEach(part => add(part.x, part.y))

    ctx.fillStyle = 'green';
    add(food.x, food.y);

}

function add(x, y) {
    ctx.fillRect(x * celWidth, y * celHeight, celWidth - 1, celHeight - 1);
}


