

function main() {
  constructDisplay()
  gameBoard = new Board()
  timer()
  update()
}

end = false
function gameEnd() {
  remove_element('#held')
  remove_element('#nexts')
  clearTimeout(timeoutID)
  removeEventListener('keydown', keydown_fn)
  endScreen()
  end = true
}

window.addEventListener("DOMContentLoaded", main);

window.addEventListener('keydown', keydown_fn);

function keydown_fn(e) {
  e.preventDefault()
  if (e.key === 'ArrowLeft') {
    gameBoard.moveLeftCurrent()
  }
  else if (e.key === 'ArrowRight') {
    gameBoard.moveRightCurrent()
  }
  else if (e.key === 'ArrowDown') {
    gameBoard.moveDownCurrent()
  }
  else if (e.key === 'ArrowUp') {
    gameBoard.swapHeld()
  }
  else if (e.key === ' ') {
    gameBoard.rotateCurrent()
  }
  if (!end) update()
}
