

function main() {
  constructDisplay()
  gameBoard = new Board()
  timer()
  update()
}

function gameEnd() {
  remove_element('#held')
  remove_element('#nexts')
  clearTimeout(timeoutID)
  removeEventListener('keydown', keydown_fn)
  endScreen()
}

window.addEventListener("DOMContentLoaded", e => main());

window.addEventListener('keydown', keydown_fn);

function keydown_fn(e) {
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
}
