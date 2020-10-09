

function main() {

}

function constructBoard() {
  push_child('body', '<div id=\'board\'></div>')
  for (let i = 0; i < 20; i++) {
    push_child('#board', `<div id='row${i}' class='row'></div>`)
    for (let j = 0; j < 10; j++) {
      push_child(`#row${i}`, `<div id='cell${j}' class='cell'></div>`);
    }
  }
}
