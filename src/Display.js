/**
* Graphics related board functions
* I've personally never liked canvas, and Tetris is pretty easy to make without it
* because it only updates on player input
*/

/**
 * Mapping of display name -> array of display colors
 */
displays = {}

/**
 * Creates the visible displays for gameplay
 */
function constructDisplay() {
  displays['board'] = new Array(20).fill([]).map(x => x = new Array(10).fill(Shape.Empty))
  displays['held'] = new Array(4).fill([]).map(x => x = new Array(4).fill(Shape.Empty))
  for (let k = 0; k < 4; k++) {
    displays[`next${k}`] = new Array(4).fill([]).map(x => x = new Array(4).fill(Shape.Empty))
  }
  push_child('#display', '<div id="held"></div>')
  set_color('#held', '#d3d3d3')
  push_child('#held', '<p>Held</p>')
  for (let i = 0; i < 4; i++) {
    push_child('#held', `<div id='heldrow${i}' class='row'></div>`)
    for (let j = 0; j < 4; j++) {
      push_child(`#heldrow${i}`, `<div id='heldr${i}c${j}' class='cell'></div>`);
      set_color(`#heldr${i}c${j}`, Shape.Empty)
    }
  }
  push_child('#held', `<br /><span id='time'>Time: 0s</span><br /><br />`)
  push_child('#held', `<span id='score'>Score: 0</span><br />`)

  push_child('#display', '<div id=\'board\'></div>')
  set_color('#board', '#d3d3d3')
  for (let i = 0; i < 20; i++) {
    push_child('#board', `<div id='row${i}' class='row'></div>`)
    for (let j = 0; j < 10; j++) {
      push_child(`#row${i}`, `<div id='r${i}c${j}' class='cell'></div>`);
      set_color(`#r${i}c${j}`, Shape.Empty)
    }
  }

  push_child('#display', '<div id=\'nexts\'></div>')
  set_color('#nexts', '#d3d3d3')
  push_child('#nexts', '<p>Next Piece</p>');
  for (let k = 0; k < 4; k++) {
    push_child('#nexts', `<div id='next${k}' class='next'></div>`)
    for (let i = 0; i < 4; i++) {
      push_child(`#next${k}`, `<div id='n${k}row${i}' class='row'></div>`)
      for (let j = 0; j < 4; j++) {
        push_child(`#n${k}row${i}`, `<div id='n${k}r${i}c${j}' class='cell'></div>`);
        set_color(`#n${k}r${i}c${j}`, Shape.Empty)
      }
    }
  }
}

/**
 * Updates main board graphics
 */
function renderBoard() {
  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 10; j++) {
      set_color(`#r${i}c${j}`, getCellColor('board', i,j))
    }
  }
}

/**
 * Updates held piece board graphics
 */
function renderHeld() {
  if (gameBoard.heldPiece === null) return
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      set_color(`#heldr${i}c${j}`, Shape.Empty)
    }
  }
  gameBoard.heldPiece.coords.forEach(c => set_color(`#heldr${c[0]}c${c[1]-3}`, gameBoard.heldPiece.shape))
}

/**
 * Updates all 4 held pieces graphics
 */
function renderNext() {
  for (let k = 0; k < 4; k++) {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        set_color(`#n${k}r${i}c${j}`, Shape.Empty)
      }
    }
    gameBoard.nextPiece[k].coords.forEach(c => set_color(`#n${k}r${c[0]}c${c[1]-3}`, gameBoard.nextPiece[k].shape))
  }
}

/**
 * Calls all graphics update functions
 */
function update() {
  renderBoard()
  renderHeld()
  renderNext()
}

/** How many seconds since main() was called */
time = 0
/** Current timeout, used for disabling timer */
timeoutID = null

/**
 * Increments seconds, and also moves current piece down once per second
 */
function timer() {
  set_text('#time', `Time: ${time}s`)
  time += 1
  timeoutID = setTimeout(timer, 1000)
  if (!(time % 10)) rate += .05
}

/** Alters speed that pieces drop */
rate = 1

/** Used to disable drop timer*/
autoTimeOutID = null

function autoMove() {
  timeoutID = setTimeout(autoMove, Math.floor(1000 / rate))
  if (time != 1) {
    gameBoard.moveDownCurrent()
    if (!end) update()
  }
}

/**
 * Creates end screen graphic
 */
function endScreen() {
  remove_element('#held')
  remove_element('#nexts')
  push_child('#display', '<div id=\'end\'></div>')
  set_color('#end', '#d3d3d3')
  push_child('#end', `<p>Score: ${gameBoard.score}</p>`)
  push_child('#end', `<p>Time: ${time}s</p>`)
  push_child('#end', `<button onclick='window.location.reload()'>Play Again?</button>`)
}

/**
 * Sets selected cell of selected display to the color
 * @param {string} dis
 * @param {number} row
 * @param {number} col
 * @param {string} color
 */
function setCellColor(dis, row, col, color) {
  displays[dis][row][col] = color
}

/**
 * Gets the color of the cell
 * @param {string} dis
 * @param {number} row
 * @param {number} col
 * @returns {String}
 */
function getCellColor(dis, row,col) {
  return displays[dis][row][col];
}
