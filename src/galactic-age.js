

export class User {
  constructor (earth, mercury, venus, mars, jupiter){
    this.earth = earth;
    this.mercury = mercury;
    this.venus = venus;
    this.mars = mars;
    this.jupiter = jupiter;
  }

  mercuryAge() {
    const mercury = this.earth * 0.24;
    const mercuryRounded = Math.round( mercury * 10 )/10;
    this.mercury = mercuryRounded;
  }


}
