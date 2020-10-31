/**
 * @author Ethan Grantz
 * Game state and player interaction handling
 */

/**
 * Creates necessary resources for gameplay
 */
function main() {
  constructDisplay()
  gameBoard = new Board()
  timer()
  autoMove()
  update()
}

/** Tracks if game is over */
end = false

/**
 * Stops game and alters display for end of game
 */
function gameEnd() {
  clearTimeout(timeoutID)
  clearTimeout(autoTimeOutID)
  removeEventListener('keydown', keydown_fn)
  endScreen()
  end = true
}

/** Starts game when everything is loaded */
window.addEventListener("DOMContentLoaded", main);

/** Detects key presses */
window.addEventListener('keydown', keydown_fn);

/**
 * Calls appropriate functions for key presses
 */
function keydown_fn(e) {
  if (e.key != 'F12' && e.key != 'F5') e.preventDefault()
  if (e.key === 'ArrowLeft') {
    gameBoard.moveLeftCurrent()
    if (!end) update()
  }
  else if (e.key === 'ArrowRight') {
    gameBoard.moveRightCurrent()
    if (!end) update()
  }
  else if (e.key === 'ArrowDown') {
    gameBoard.moveDownCurrent()
    if (!end) update()
  }
  else if (e.key === 'ArrowUp') {
    gameBoard.swapHeld()
    if (!end) update()
  }
  else if (e.key === ' ') {
    gameBoard.rotateCurrent()
    if (!end) update()
  }
}
