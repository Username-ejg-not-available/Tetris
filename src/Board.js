
class Board {
  constructor() {
    this.boardArray = new Array(20).fill([]).map(x => x = new Array(10).fill(Shape.Empty))
    this.heldArray = new Array(4).fill([]).map(x => x = new Array(4).fill(Shape.Empty))
    this.nextArray = new Array(4).fill([]).map(x => x = new Array(4).fill([]).map(x => x = new Array(4).fill(Shape.Empty)))
    this.currentPiece = this.randomPiece()
    this.heldPiece = null
    this.nextPiece = new Array(4).fill(null).map(x => x = this.randomPiece())
    this.canHold = true
    this.placePiece(this.currentPiece)
  }

  placePiece(piece) {
    for (let c of piece.coords) {
      if (this.getCellColor(c[0],c[1]) !== Shape.Empty) return
    }
    for (let c of piece.coords) {
      this.boardArray[c[0]][c[1]] = piece.shape
    }
  }

  swapHeld() {
    if (!this.canHold) return
    this.currentPiece.coords.forEach(x => this.setCellColor(x[0],x[1], Shape.Empty))
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
    this.placePiece(this.currentPiece)
    update()
  }

  moveDownCurrent() {
    let tempPiece = clone(this.currentPiece.coords).map(x => [x[0] + 1, x[1]])
    this.currentPiece.coords.forEach(x => this.setCellColor(x[0],x[1], Shape.Empty))
    if (tempPiece.some(x => x[0] > 19 || this.getCellColor(x[0], x[1]) !== Shape.Empty)) {
      this.currentPiece.coords.forEach(x => this.setCellColor(x[0],x[1], this.currentPiece.shape))
      this.currentPiece = this.nextPiece.shift()
      this.nextPiece.push(this.randomPiece())
      this.placePiece(this.currentPiece)
      this.canHold = true
      return
    }
    tempPiece.forEach(x => this.setCellColor(x[0],x[1], this.currentPiece.shape))
    this.canHold = false
    this.currentPiece.moveDown()
  }

  moveLeftCurrent() {
    let tempPiece = clone(this.currentPiece.coords).map(x => [x[0], x[1] - 1])
    this.currentPiece.coords.forEach(x => this.setCellColor(x[0],x[1], Shape.Empty))
    if (tempPiece.some(x => x[1] < 0 || this.getCellColor(x[0], x[1]) !== Shape.Empty)) {
      this.currentPiece.coords.forEach(x => this.setCellColor(x[0],x[1], this.currentPiece.shape))
      return
    }
    tempPiece.forEach(x => this.setCellColor(x[0],x[1], this.currentPiece.shape))
    this.canHold = false
    this.currentPiece.moveLeft()
  }

  moveRightCurrent() {
    let tempPiece = clone(this.currentPiece.coords).map(x => [x[0], x[1] + 1])
    this.currentPiece.coords.forEach(x => this.setCellColor(x[0],x[1], Shape.Empty))
    if (tempPiece.some(x => x[1] > 9 || this.getCellColor(x[0], x[1]) !== Shape.Empty)) {
      this.currentPiece.coords.forEach(x => this.setCellColor(x[0],x[1], this.currentPiece.shape))
      return
    }
    tempPiece.forEach(x => this.setCellColor(x[0],x[1], this.currentPiece.shape))
    this.canHold = false
    this.currentPiece.moveRight()
  }

  rotateCurrent() {
    let tempPiece = clone(this.currentPiece)
    tempPiece.rotate()
    this.currentPiece.coords.forEach(x => this.setCellColor(x[0],x[1], Shape.Empty))
    if (tempPiece.coords.some(x => this.getCellColor(x[0], x[1]) !== Shape.Empty)) {
      this.currentPiece.coords.forEach(x => this.setCellColor(x[0],x[1], this.currentPiece.shape))
      return
    }
    tempPiece.coords.forEach(x => this.setCellColor(x[0],x[1], this.currentPiece.shape))
    this.canHold = false
    this.currentPiece.rotate()
  }

  randomPiece() {
    const pieces = [I,O,L,J,T,S,Z]
    return new pieces[Math.floor(Math.random() * 7)]()
  }

  setCellColor(row, col, color) {
    this.boardArray[row][col] = color
  }

  getCellColor(row,col) {
    return this.boardArray[row][col];
  }
}
