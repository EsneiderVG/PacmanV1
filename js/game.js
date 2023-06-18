var pacmanObject = document.getElementById("pacman");
var ghostRedO = document.getElementById('ghostRed');
var ghostGreenO = document.getElementById('ghostGreen');
var ghostYellowO = document.getElementById('ghostYellow');
var scoreContain = document.getElementById("score");
var vidasCont = document.getElementById('vidas');
var scoreCounter = 0;
var countMoney = 0;
var countLifes = 3;

var world = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 0, 1, 1, 1, 3, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 3, 2],
    [2, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 3, 1, 1, 1, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2],
    [2, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 2],
    [2, 1, 2, 1, 1, 2, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2],
    [2, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 2, 2, 2, 2, 1, 2],
    [2, 1, 1, 1, 3, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 3, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 2],
    [2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 2, 2, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 2],
    [2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 2, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 2, 1, 2, 1, 3, 2, 2, 2, 2, 1, 1, 1, 1, 2, 1, 1, 2, 2, 2, 2, 2],
    [2, 3, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 3, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
];
//   console.log(world);

function displayWorld() {
    var output = "";

    var worldOut = document.getElementById("world");

    for (var i = 0; i < world.length; i++) {
        output += '\n<div class="row">\n';
        for (j = 0; j < world[i].length; j++) {
            if (world[i][j] == 2) {
                output += "<div class='brick'></div>";
            } else if (world[i][j] == 1) {
                output += "<div class='coin'></div>";
            }
            else if (world[i][j] == 3) {
                output += "<div class='berrys'></div>";
            }
            if (world[i][j] == 0) {
                output += "<div class='empty'></div>";
            }
        }
        output += "\n</div>";
    }
    // console.log(output);
    worldOut.innerHTML = output;
}

let pacman = {
    x: 1,
    y: 1
};

let ghostRED = {
    x: 8,
    y: 1,
}

let ghostGREEN = {
    x: 17,
    y: 1
}

let ghostYELLOW = {
    x: 8,
    y: 16
}

function actualizarPacman() {
    pacmanObject.style.left = pacman.x * 20 + "px";
    pacmanObject.style.top = pacman.y * 20 + "px";
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función para mover el fantasma de forma aleatoria
function moveGhost(ghost, ghostO, speed) {

    let moveGhostsum = getRandomNumber(0, speed);

    ghostO.style.top = ghost.y * 20 + "px";
    ghostO.style.left = ghost.x * 20 + "px";

    // izquierda
    if (moveGhostsum == 2 && world[ghost.y][ghost.x - 1] !== 2) {
        // alert("no hay pared");
        ghost.x--;
        ghostO.style.left = ghost.x * 20 + "px";
    }
    // derecha
    if (moveGhostsum == 1 && world[ghost.y][ghost.x + 1] !== 2) {
        // alert("derecha");
        ghost.x++;
        ghostO.style.left = ghost.x * 20 + "px";
    }

    // arriba
    if (moveGhostsum == 0 && world[ghost.y - 1][ghost.x] !== 2) {
        // alert("upppp");
        ghost.y--;
        ghostO.style.top = ghost.y * 20 + "px";
    }
    // arriba
    if (moveGhostsum == 3 && world[ghost.y + 1][ghost.x] !== 2) {
        // alert("abajo");
        ghost.y++;
        ghostO.style.top = ghost.y * 20 + "px";
    }

}

function actualizarGhosts(ghost, ghostO) {

    ghostO.style.top = ghost.y * 20 + "px";
    ghostO.style.left = ghost.x * 20 + "px";

}

function movementPacman(pacmanMov, add) {

    if (pacmanMov == "pacman.x") {
        let blockVerify = add == "++" ? pacman.x + 1 : pacman.x - 1
        if (world[pacman.y][blockVerify] !== 2) {
            add == "++" ? pacman.x++ : pacman.x--
        }
    }

    if (pacmanMov == "pacman.y") {
        let blockVerify = add == "++" ? pacman.y + 1 : pacman.y - 1
        if (world[blockVerify][pacman.x] !== 2) {
            add == "++" ? pacman.y++ : pacman.y--
        }
    }

}


function actualizarScore() {
    scoreContain.innerHTML = "SCORE: " + scoreCounter;
}

function detectarColisiones(ghost, ghostO) {

    if (pacman.y == ghost.y && pacman.x == ghost.x) {
        // alert("hola")
        moveGhost(ghost, ghostO, 3);
        countLifes--;
        actualizarVidas();

    }
}

function actualizarVidas() {

    vidasCont.innerHTML = "";
    for (let g = 0; g < countLifes; g++) {
        vidasCont.innerHTML += "🧡";
    }

    if (countLifes == 0) {
        endGame();
    }
}

function endGame() {
    clearInterval(movementPacmans);
    clearInterval(detectarColisionesInt);
    Swal.fire({
        title: 'GAME OVER! has perdido todas tus vidas',
        showDenyButton: false,
        showCancelButton: true,
        confirmButtonText: 'Volver a intentar',
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            location.reload();
        }
    })
}

displayWorld();
actualizarPacman();
actualizarVidas();

actualizarGhosts(ghostRED, ghostRedO);
actualizarGhosts(ghostGREEN, ghostGreenO);
actualizarGhosts(ghostYELLOW, ghostYellowO);


var movementPacmans = setInterval(function () {
    moveGhost(ghostRED, ghostRedO, 3);
    moveGhost(ghostGREEN, ghostGreenO, 3)
    moveGhost(ghostYELLOW, ghostYellowO, 3)

}, 500);

var detectarColisionesInt = setInterval(function () {
    detectarColisiones(ghostRED, ghostRedO);
    detectarColisiones(ghostGREEN, ghostGreenO);
    detectarColisiones(ghostYELLOW, ghostYellowO);
}
    , 10)

document.addEventListener("DOMContentLoaded", function () {

    document.addEventListener("keydown", function (event) {
        const key = event.keyCode;

        // derecho
        if (key === 39) {

            movementPacman("pacman.x", "++");
            pacmanObject.style.transform = 'rotate(0deg)';
        }
        // izquierdo
        if (key === 37) {
            movementPacman("pacman.x", "--");
            pacmanObject.style.transform = 'rotate(180deg)';
        }
        // arriba
        if (key === 38) {
            movementPacman("pacman.y", "--");
            pacmanObject.style.transform = 'rotate(-90deg) ';
        }
        // abajo
        if (key === 40) {
            movementPacman("pacman.y", "++");
            pacmanObject.style.transform = 'rotate(90deg)';
        }

        if (world[pacman.y][pacman.x] == 1) {
            world[pacman.y][pacman.x] = 0;
            scoreCounter += 20
            actualizarScore();
            actualizarPacman();
        }

        if (world[pacman.y][pacman.x] == 3) {
            world[pacman.y][pacman.x] = 0;
            scoreCounter += 50;
            actualizarScore();
            actualizarPacman();

        }

        if (world[pacman.y][pacman.x] == 0) {
            actualizarPacman();

        }

        // console.log(world.length);
        var tempMoney = 0;
        for (var i = 0; i < world.length; i++) {
            for (var z = 0; z < world[i].length; z++) {
                // console.log(z);
                if (world[i][z] == 1) {
                    tempMoney += 1;
                }
            }
        }
        countMoney = tempMoney;

        if (countMoney == 0) {
            Swal.fire({
                title: 'GANASTE EL JUEGO! felicidades',
                showDenyButton: false,
                showCancelButton: true,
                confirmButtonText: 'Quiero volver a intentarlo',
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    location.reload();
                }
            })
            clearInterval(movementPacmans);
        }
        // console.log(countMoney)



        displayWorld();

    });
});