const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const speedSelector = document.getElementById('speed');

// Set canvas to dynamic size
canvas.width = 600;
canvas.height = 600;

// Game Variables
let snake = [{ x: 300, y: 300 }];
let direction = { x: 0, y: 0 };
let food = { x: 0, y: 0 };
let speed = 150;
let score = 0;

// Initialize Game
function init() {
    createFood();
    document.addEventListener('keydown', changeDirection);
    speedSelector.addEventListener('change', updateSpeed);
    gameLoop();
}

// Update Speed
function updateSpeed() {
    speed = parseInt(speedSelector.value);
}

// Game Loop
function gameLoop() {
    setTimeout(() => {
        clearCanvas();
        drawFood();
        moveSnake();
        drawSnake();
        checkGameOver();
        gameLoop();
    }, speed);
}

// Clear Canvas
function clearCanvas() {
    ctx.fillStyle = '#111';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Draw Snake
function drawSnake() {
    ctx.fillStyle = 'lime';
    snake.forEach(segment => {
        ctx.fillRect(segment.x, segment.y, 20, 20);
        ctx.strokeStyle = 'black';
        ctx.strokeRect(segment.x, segment.y, 20, 20);
    });
}

// Move Snake
function moveSnake() {
    const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };

    // Check food collision
    if (head.x === food.x && head.y === food.y) {
        createFood();
        score++;
    } else {
        snake.pop();
    }

    snake.unshift(head);
}

// Change Direction
function changeDirection(event) {
    const key = event.key;
    if (key === 'ArrowUp' && direction.y === 0) {
        direction = { x: 0, y: -20 };
    } else if (key === 'ArrowDown' && direction.y === 0) {
        direction = { x: 0, y: 20 };
    } else if (key === 'ArrowLeft' && direction.x === 0) {
        direction = { x: -20, y: 0 };
    } else if (key === 'ArrowRight' && direction.x === 0) {
        direction = { x: 20, y: 0 };
    }
}

// Create Food
function createFood() {
    food.x = Math.floor(Math.random() * (canvas.width / 20)) * 20;
    food.y = Math.floor(Math.random() * (canvas.height / 20)) * 20;
}

// Draw Food
function drawFood() {
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, 20, 20);
}

// Check Game Over
function checkGameOver() {
    const head = snake[0];
    if (
        head.x < 0 || head.x >= canvas.width ||
        head.y < 0 || head.y >= canvas.height ||
        snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)
    ) {
        alert(`Game Over! Your Score: ${score}`);
        resetGame();
    }
}

// Reset Game
function resetGame() {
    snake = [{ x: 300, y: 300 }];
    direction = { x: 0, y: 0 };
    score = 0;
    createFood();
}

// Start the Game
init();
