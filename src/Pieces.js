class Piece {
  constructor(id, shape, coords) {
    this.id = id
    this.shape = shape
    this.coords = coords
    this.rotationIndex = 0
    this.rotationIncrements = []
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

  rotate() {
    for (let c in this.coords) {
      this.coords[c][0] += this.rotationIncrements[this.rotationIndex][c][0]
      this.coords[c][1] += this.rotationIncrements[this.rotationIndex][c][1]
    }
    this.rotationIndex = (this.rotationIndex + 1) % 4
  }
}

class I extends Piece {
  constructor(id) {
    super(id, Shape.I, [[0,5],[1,5],[2,5],[3,5]])
    this.rotationIncrements = [
      [[2,1],[1,0],[0,-1],[-1,-2]],
      [[1,-2],[0,-1],[-1,0],[-2,1]],
      [[-2,-1],[-1,0],[0,1],[1,2]],
      [[-1,2],[0,1],[1,0],[2,-1]]];
  }
}

class O extends Piece {
  constructor(id) {
    super(id, Shape.O, [[0,4],[0,5],[1,4],[1,5]])
    this.rotationIncrements = [
      [[0,0],[0,0],[0,0],[0,0]],
      [[0,0],[0,0],[0,0],[0,0]],
      [[0,0],[0,0],[0,0],[0,0]],
      [[0,0],[0,0],[0,0],[0,0]]];
  }
}

class L extends Piece {
  constructor(id) {
    super(id, Shape.L, [[0,4],[1,4],[2,4],[2,5]])
    this.rotationIncrements = [
      [[1,1],[0,0],[-1,-1],[0,-2]],
      [[1,-1],[0,0],[-1,1],[-2,0]],
      [[-1,-1],[0,0],[1,1],[0,2]],
      [[-1,1],[0,0],[1,-1],[2,0]]];
  }
}

class J extends Piece {
  constructor(id) {
    super(id, Shape.J, [[0,4],[1,4],[2,4],[0,5]])
    this.rotationIncrements = [
      [[1,1],[0,0],[-1,-1],[2,0]],
      [[1,-1],[0,0],[-1,1],[0,-2]],
      [[-1,-1],[0,0],[1,1],[-2,0]],
      [[-1,1],[0,0],[1,-1],[0,2]]];
  }
}

class T extends Piece {
  constructor(id) {
    super(id, Shape.T, [[0,4],[1,4],[2,4],[1,5]])
    this.rotationIncrements = [
      [[1,1],[0,0],[-1,-1],[1,-1]],
      [[1,-1],[0,0],[-1,1],[-1,-1]],
      [[-1,-1],[0,0],[1,1],[-1,1]],
      [[-1,1],[0,0],[1,-1],[1,1]]];
  }
}

class S extends Piece {
  constructor(id) {
    super(id, Shape.S, [[0,4],[1,4],[1,5],[2,5]])
    this.rotationIncrements = [
      [[1,1],[0,0],[1,-1],[0,-2]],
      [[1,-1],[0,0],[-1,-1],[-2,0]],
      [[-1,-1],[0,0],[-1,1],[0,2]],
      [[-1,1],[0,0],[1,1],[2,0]]];
  }
}

class Z extends Piece {
  constructor(id) {
    super(id, Shape.Z, [[0,5],[1,5],[1,4],[2,4]])
    this.rotationIncrements = [
      [[2,0],[1,-1],[0,0],[-1,-1]],
      [[0,-2],[-1,-1],[0,0],[-1,1]],
      [[-2,0],[-1,1],[0,0],[1,1]],
      [[0,2],[1,1],[0,0],[1,-1]]];
  }
}
