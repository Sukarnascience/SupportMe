const dog = document.getElementById('walking');
let direction = 'right';
let posX = 0;
const speed = 0.4; // Adjust speed as needed

function moveDog() {
    const maxX = window.innerWidth - dog.clientWidth;

    if (direction === 'right') {
        posX += speed;
        if (posX >= maxX) {
            direction = 'left';
            dog.style.transform = 'scaleX(-1)'; // Flip the image horizontally
        }
    } else {
        posX -= speed;
        if (posX <= 0) {
            direction = 'right';
            dog.style.transform = 'scaleX(1)'; // Reset the image flip
        }
    }

    dog.style.left = `${posX}px`;

    requestAnimationFrame(moveDog);
}

window.onload = function() {
    moveDog();
}
