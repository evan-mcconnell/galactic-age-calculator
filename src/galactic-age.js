

export class User {
  constructor (earth, mercury, venus, mars, jupiter){
    this.earth = earth;
    this.mercury = mercury;
    this.venus = venus;
    this.mars = mars;
    this.jupiter = jupiter;
    // this.lifeExpEarth = lifeExpEarth;
    // this.lifeExpMercury = lifeExpMercury;
    // this.lifeExpVenus = lifeExpVenus;
    // this.lifeExpMars = lifeExpMars;
    // this.lifeExpJupiter = lifeExpJupiter;
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

  galacticLifeExp() {
    const mercury = this.lifeExpEarth / 0.24;
    const mercuryRounded = Math.floor( mercury );
    this.lifeExpMercury = mercuryRounded;
    const venus = this.lifeExpEarth / 0.62;
    const venusRounded = Math.floor( venus );
    this.lifeExpVenus = venusRounded;
    const mars = this.lifeExpEarth / 1.88;
    const marsRounded = Math.floor( mars );
    this.lifeExpMars = marsRounded;
    const jupiter = this.lifeExpEarth / 11.86;
    const jupiterRounded = Math.round( jupiter * 10 )/10;
    this.lifeExpJupiter = jupiterRounded;
  }

  lifeLeftEarth() {
    const earthExp = this.lifeExpEarth - this.earth;
    console.log(earthExp);
    if (earthExp > 0) {
      return "You'll likely live on Earth for " + earthExp + " more Earth years!";
    } else {
      return "dead";
    }
  }




}
