/**
 * @author Ethan Grantz
 * Anything that I deem to be a 'Utility' that any function of class might use
 */

/**
 * Mapping Shape -> display color
 */
Shape = {
  I: '#00ffff',
  O: '#ffff00',
  L: '#feaa00',
  J: '#0000fd',
  T: '#9101fe',
  S: '#00ff01',
  Z: '#ff0100',
  Empty: '#ffffff'
}

/**
 * Creates a deep copy of the parameter
 * @param {object} obj
 */
clone = function(obj) {
  if (obj === null || typeof(obj) !== 'object') return obj;

  if (Array.isArray(obj)) return obj.map(x => x = clone(x))

  let copy;
  //using the for loop at the bottom does not copy superclass properties, so I have to create
  //instances like this if I want the copied pieces to be usable
  if (obj instanceof Piece) {
    if (obj instanceof I) copy = new I()
    else if (obj instanceof O) copy = new O()
    else if (obj instanceof L) copy = new L()
    else if (obj instanceof J) copy = new J()
    else if (obj instanceof T) copy = new T()
    else if (obj instanceof S) copy = new S()
    else copy = new Z()
  }

  for (const prop in obj) {
    copy[prop] = clone(obj[prop])
  }
  return copy
}
