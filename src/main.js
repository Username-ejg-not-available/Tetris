

function main() {
  constructBoard()
}

function constructBoard() {
  push_child('body', '<div id=\'board\'></div>')
  for (let i = 0; i < 20; i++) {
    push_child('#board', `<div id='row${i}' class='row'></div>`)
    for (let j = 0; j < 10; j++) {
      push_child(`#row${i}`, `<div id='r${i}c${j}' class='cell'></div>`);
    }
  }
}

function clearboard() {
  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 10; j++) {
      set_color('#r'+i+'c'+j, Shape.Empty)
    }
  }
}

function draw(piece) {
  for (let c of piece.coords) {
    set_color('#r' + c[0] + 'c' + c[1], piece.shape)
  }
}
