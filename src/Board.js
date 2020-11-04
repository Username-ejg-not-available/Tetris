/**
 * @author Ethan Grantz
 * Gameplay related board functions
 */

class Board {
  /**
   * Creates starting pieces
   */
  constructor() {
    this.currentPiece = this.randomPiece()
    this.heldPiece = null
    this.nextPiece = new Array(4).fill(null).map(x => x = this.randomPiece())
    this.score = 0
    this.placeCurrent()
  }

  /**
   * Places current piece on screen, or ends game if it cant be placed
   */
  placeCurrent() {
    for (let c of this.currentPiece.coords) {
      setCellColor('board', c[0], c[1], this.currentPiece.shape)
    }
  }

  /**
   * Stores current piece and replaces it with appropriate piece
   */
  swapHeld() {
    this.currentPiece.coords.forEach(x => setCellColor('board', x[0],x[1], Shape.Empty))
    if (this.heldPiece !== null) {
      const temp = clone(this.heldPiece)
      this.heldPiece = clone(this.currentPiece)
      this.currentPiece = temp
    }
    else {
      this.heldPiece = clone(this.currentPiece)
      this.currentPiece = this.nextPiece.shift()
      this.nextPiece.push(this.randomPiece())
    }
    this.heldPiece.coords = clone(this.heldPiece.origCoords)
    this.heldPiece.rotationIndex = 0
    this.placeCurrent()
  }

  /**
   * Checks if piece can be moved down, and if so, it moves it down
   */
  moveDownCurrent() {
    let tempPiece = clone(this.currentPiece.coords).map(x => [x[0] + 1, x[1]])
    this.currentPiece.coords.forEach(x => setCellColor('board', x[0],x[1], Shape.Empty))
    if (tempPiece.some(x => x[0] > 22 || getCellColor('board', x[0], x[1]) !== Shape.Empty)) {
      //check if the current piece is above upper bound
      if (this.currentPiece.coords.some(x => x[0] < 3)) {
        gameEnd()
        return
      }
      this.currentPiece.coords.forEach(x => setCellColor('board', x[0],x[1], this.currentPiece.shape))
      this.currentPiece = this.nextPiece.shift()
      this.nextPiece.push(this.randomPiece())
      this.checkForTet()
      this.placeCurrent()
      this.canHold = true
      return
    }
    tempPiece.forEach(x => setCellColor('board', x[0],x[1], this.currentPiece.shape))
    this.currentPiece.moveDown()
  }

  /**
   * Checks if piece can be moved left, and if so, it moves it left
   */
  moveLeftCurrent() {
    let tempPiece = clone(this.currentPiece.coords).map(x => [x[0], x[1] - 1])
    this.currentPiece.coords.forEach(x => setCellColor('board', x[0],x[1], Shape.Empty))
    if (tempPiece.some(x => x[1] < 0 || getCellColor('board', x[0], x[1]) !== Shape.Empty)) {
      this.currentPiece.coords.forEach(x => setCellColor('board', x[0],x[1], this.currentPiece.shape))
      return
    }
    tempPiece.forEach(x => setCellColor('board', x[0],x[1], this.currentPiece.shape))
    this.currentPiece.moveLeft()
  }

  /**
   * Checks if piece can be moved right, and if so, it moves it right
   */
  moveRightCurrent() {
    let tempPiece = clone(this.currentPiece.coords).map(x => [x[0], x[1] + 1])
    this.currentPiece.coords.forEach(x => setCellColor('board', x[0],x[1], Shape.Empty))
    if (tempPiece.some(x => x[1] > 9 || getCellColor('board', x[0], x[1]) !== Shape.Empty)) {
      this.currentPiece.coords.forEach(x => setCellColor('board', x[0],x[1], this.currentPiece.shape))
      return
    }
    tempPiece.forEach(x => setCellColor('board', x[0],x[1], this.currentPiece.shape))
    this.currentPiece.moveRight()
  }

  /**
   * Checks if piece can be rotated, and if so, it rotates it
   */
  rotateCurrent() {
    let tempPiece = clone(this.currentPiece)
    tempPiece.rotate()
    this.currentPiece.coords.forEach(x => setCellColor('board', x[0],x[1], Shape.Empty))
    if (tempPiece.coords.some(x => getCellColor('board', x[0], x[1]) !== Shape.Empty)) {
      this.currentPiece.coords.forEach(x => setCellColor('board', x[0],x[1], this.currentPiece.shape))
      return
    }
    tempPiece.coords.forEach(x => setCellColor('board', x[0],x[1], this.currentPiece.shape))
    this.currentPiece.rotate()
  }

  /**
   * Checks for completed rows, gives points, and removes completed rows
   */
  checkForTet() {
    let completeRows = []
    for (let i = 0; i < 20; i++) {
      if (!displays['board'][i].includes(Shape.Empty)) completeRows.push(i)
    }
    for (let r of completeRows) {
      this.shiftDown(r)
    }
    //update score
    this.score += completeRows.length
    set_text('#score', `Score: ${this.score}`)
  }

  /**
   * Removes all completed rows
   */
  shiftDown(row) {
    for (let i = row; i > -1; i--) {
      //top row gets set to white
      if (!i) displays['board'][i].fill(Shape.Empty)
      //other rows get set to the row above them
      else {
        displays['board'][i] = clone(displays['board'][i - 1])
      }
    }
  }

  /**
   * Creates new instance of random piece
   * @return {Piece}
   */
  randomPiece() {
    const pieces = [I,O,L,J,T,S,Z]
    return new pieces[Math.floor(Math.random() * 7)]()
  }
}
