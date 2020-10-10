

function main() {
  constructDisplay()
  gameBoard = new Board()
  update()
}

window.addEventListener("DOMContentLoaded", e => main());

window.addEventListener('keydown', e => {
  e.preventDefault()
  if (e.key === 'ArrowLeft') {
    gameBoard.moveLeftCurrent()
    update();
  }
  else if (e.key === 'ArrowRight') {
    gameBoard.moveRightCurrent()
    update();
  }
  else if (e.key === 'ArrowDown') {
    gameBoard.moveDownCurrent()
    update();
  }
  else if (e.key === 'ArrowUp') {
    gameBoard.swapHeld()
    update()
  }
  else if (e.key === ' ') {
    gameBoard.rotateCurrent()
    update();
  }
});
