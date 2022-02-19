let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.clientWidth, canvas.height);
ctx.fillStyle = 'white';
ctx.fillRect(100, 100, 20 - 1, 20 - 1);
ctx.fillRect(120, 100, 20 - 1, 20 - 1);
ctx.fillRect(140, 100, 20 - 1, 20 - 1);
ctx.fillRect(160, 120, 20 - 1, 20 - 1);
ctx.fillStyle = 'green';
ctx.fillRect(200, 200, 20 - 1, 20 - 1);
