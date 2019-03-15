

export class User {
  constructor (earth, mercury, venus, mars, jupiter){
    this.earth = earth;
    this.mercury = mercury;
    this.venus = venus;
    this.mars = mars;
    this.jupiter = jupiter;
  }

  galacticAges() {
    const mercury = this.earth / 0.24;
    const mercuryRounded = Math.floor( mercury );
    this.mercury = mercuryRounded;
    const venus = this.earth / 0.62;
    const venusRounded = Math.floor( venus );
    this.venus = venusRounded;
    const mars = this.earth / 1.88;
    const marsRounded = Math.floor( mars );
    this.mars = marsRounded;
    const jupiter = this.earth / 11.86;
    const jupiterRounded = Math.round( jupiter * 10 )/10;
    this.jupiter = jupiterRounded;
  }




}
