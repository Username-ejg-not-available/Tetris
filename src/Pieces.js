class Piece {
  constructor(id, shape, coords) {
    this.id = id
    this.shape = shape
    this.coords = coords
  }

  moveDown() {
    for (let c of this.coords) {
      c[0] += 1
    }
  }

  moveLeft() {
    for (let c of this.coords) {
      c[1] -= 1
    }
  }

  moveRight() {
    for (let c of this.coords) {
      c[1] += 1
    }
  }
}

class I extends Piece {
  constructor(id) {
    super(id, Shape.I, [[0,5],[1,5],[2,5],[3,5]])
  }

  rotate() {

  }
}

class O extends Piece {
  constructor(id) {
    super(id, Shape.O, [[0,4],[0,5],[1,4],[1,5]])
  }

  rotate() {

  }
}

class L extends Piece {
  constructor(id) {
    super(id, Shape.L, [[0,4],[1,4],[2,4],[2,5]])
  }

  rotate() {

  }
}

class J extends Piece {
  constructor(id) {
    super(id, Shape.J, [[0,5],[1,5],[2,5],[2,4]])
  }

  rotate() {

  }
}

class T extends Piece {
  constructor(id) {
    super(id, Shape.T, [[0,4],[1,4],[2,4],[1,5]])
  }

  rotate() {

  }
}

class S extends Piece {
  constructor(id) {
    super(id, Shape.S, [[0,4],[1,4],[1,5],[2,5]])
  }

  rotate() {

  }
}

class Z extends Piece {
  constructor(id) {
    super(id, Shape.Z, [[0,5],[1,5],[1,4],[2,4]])
  }

  rotate() {

  }
}
