let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let rows = 20;
let cols = 20;
let celWidth = canvas.width / cols;
let celHeight = canvas.height / rows;

draw()

function draw() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    add(2, 3);
    add(3, 3);
    add(4, 3);
    add(4, 4);
    ctx.fillStyle = 'green';
    add(8, 8);

}

function add(x, y) {
    ctx.fillRect(x * celWidth, y * celHeight, celWidth - 1, celHeight - 1);
}


