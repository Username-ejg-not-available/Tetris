/**
 * Templates for the 7 types of pieces
 */

class Piece {
  /**
   * Defines Piece properties
   */
  constructor(shape, coords) {
    this.shape = shape
    this.origCoords = clone(coords)
    this.coords = coords
    this.rotationIndex = 0
    this.rotationIncrements = []
  }

  /**
   * Moves all coordinates down 1
   */
  moveDown() {
    this.coords.forEach(x => x[0] += 1)
  }

  /**
   * Moves all coordinates left 1
   */
  moveLeft() {
    this.coords.forEach(x => x[1] -= 1)
  }

  /**
   * Moves all coordinates right 1
   */
  moveRight() {
    this.coords.forEach(x => x[1] += 1)
  }

  /**
   * Rotates piece according to its current orientation and Shape
   */
  rotate() {
    for (let c in this.coords) {
      this.coords[c][0] += this.rotationIncrements[this.rotationIndex][c][0]
      this.coords[c][1] += this.rotationIncrements[this.rotationIndex][c][1]
    }
    this.rotationIndex = (this.rotationIndex + 1) % 4
  }
}

class I extends Piece {
  /** Defines properties for an I piece */
  constructor() {
    super(Shape.I, [[0,5],[1,5],[2,5],[3,5]])
    this.rotationIncrements = [
      [[2,1],[1,0],[0,-1],[-1,-2]],
      [[1,-2],[0,-1],[-1,0],[-2,1]],
      [[-2,-1],[-1,0],[0,1],[1,2]],
      [[-1,2],[0,1],[1,0],[2,-1]]];
  }
}

class O extends Piece {
  /** Defines properties for an O piece */
  constructor() {
    super(Shape.O, [[0,4],[0,5],[1,4],[1,5]])
    this.rotationIncrements = [
      [[0,0],[0,0],[0,0],[0,0]],
      [[0,0],[0,0],[0,0],[0,0]],
      [[0,0],[0,0],[0,0],[0,0]],
      [[0,0],[0,0],[0,0],[0,0]]];
  }
}

class L extends Piece {
  /** Defines properties for an L piece */
  constructor() {
    super(Shape.L, [[0,4],[1,4],[2,4],[2,5]])
    this.rotationIncrements = [
      [[1,1],[0,0],[-1,-1],[0,-2]],
      [[1,-1],[0,0],[-1,1],[-2,0]],
      [[-1,-1],[0,0],[1,1],[0,2]],
      [[-1,1],[0,0],[1,-1],[2,0]]];
  }
}

class J extends Piece {
  /** Defines properties for an J piece */
  constructor() {
    super(Shape.J, [[0,4],[1,4],[2,4],[0,5]])
    this.rotationIncrements = [
      [[1,1],[0,0],[-1,-1],[2,0]],
      [[1,-1],[0,0],[-1,1],[0,-2]],
      [[-1,-1],[0,0],[1,1],[-2,0]],
      [[-1,1],[0,0],[1,-1],[0,2]]];
  }
}

class T extends Piece {
  /** Defines properties for an T piece */
  constructor() {
    super(Shape.T, [[0,4],[1,4],[2,4],[1,5]])
    this.rotationIncrements = [
      [[1,1],[0,0],[-1,-1],[1,-1]],
      [[1,-1],[0,0],[-1,1],[-1,-1]],
      [[-1,-1],[0,0],[1,1],[-1,1]],
      [[-1,1],[0,0],[1,-1],[1,1]]];
  }
}

class S extends Piece {
  /** Defines properties for an S piece */
  constructor(id) {
    super(Shape.S, [[0,4],[1,4],[1,5],[2,5]])
    this.rotationIncrements = [
      [[1,1],[0,0],[1,-1],[0,-2]],
      [[1,-1],[0,0],[-1,-1],[-2,0]],
      [[-1,-1],[0,0],[-1,1],[0,2]],
      [[-1,1],[0,0],[1,1],[2,0]]];
  }
}

class Z extends Piece {
  /** Defines properties for an Z piece */
  constructor() {
    super(Shape.Z, [[0,5],[1,5],[1,4],[2,4]])
    this.rotationIncrements = [
      [[2,0],[1,-1],[0,0],[-1,-1]],
      [[0,-2],[-1,-1],[0,0],[-1,1]],
      [[-2,0],[-1,1],[0,0],[1,1]],
      [[0,2],[1,1],[0,0],[1,-1]]];
  }
}
