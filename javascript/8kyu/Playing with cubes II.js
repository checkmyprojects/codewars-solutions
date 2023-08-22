// https://www.codewars.com/kata/55c0ac142326fdf18d0000af

class Cube {
    constructor(side) {
      this.setSide(side)
    }
  
    getSide() {
      return this.side
    }
    
    setSide(side = 0) {
      this.side = Math.abs(side)
    }
  }