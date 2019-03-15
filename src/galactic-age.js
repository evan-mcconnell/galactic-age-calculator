

export class User {
  constructor (earth, mercury, venus, mars, jupiter){
    this.earth = earth;
    this.mercury = mercury;
    this.venus = venus;
    this.mars = mars;
    this.jupiter = jupiter;
  }

  galacticAges() {
    const mercury = this.earth * 0.24;
    const mercuryRounded = Math.round( mercury * 10 )/10;
    this.mercury = mercuryRounded;
    const venus = this.earth * 0.62;
    const venusRounded = Math.round( venus * 10 )/10;
    this.venus = venusRounded;
    const mars = this.earth * 0.24;
    const marsRounded = Math.round( mars * 10 )/10;
    this.mars = marsRounded;
    const jupiter = this.earth * 0.24;
    const jupiterRounded = Math.round( jupiter * 10 )/10;
    this.jupiter = jupiterRounded;
  }




}
