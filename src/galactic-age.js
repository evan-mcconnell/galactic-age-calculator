

export class User {
  constructor (earth, mercury, venus, mars, jupiter){
    this.Earth = earth;
    this.Mercury = mercury;
    this.Venus = venus;
    this.Mars = mars;
    this.Jupiter = jupiter;
    // this.lifeExpEarth = lifeExpEarth;
    // this.lifeExpMercury = lifeExpMercury;
    // this.lifeExpVenus = lifeExpVenus;
    // this.lifeExpMars = lifeExpMars;
    // this.lifeExpJupiter = lifeExpJupiter;
  }

  galacticAges() {
    const mercury = this.Earth / 0.24;
    const mercuryRounded = Math.floor( mercury );
    this.Mercury = mercuryRounded;
    const venus = this.Earth / 0.62;
    const venusRounded = Math.floor( venus );
    this.Venus = venusRounded;
    const mars = this.Earth / 1.88;
    const marsRounded = Math.floor( mars );
    this.Mars = marsRounded;
    const jupiter = this.Earth / 11.86;
    const jupiterRounded = Math.round( jupiter * 10 )/10;
    this.Jupiter = jupiterRounded;
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
    const earthExp = this.lifeExpEarth - this.Earth;
    if (earthExp > 0) {
      return "You'll likely live on Earth for " + earthExp + " more Earth years!";
    } else {
      return "dead";
    }
  }

  lifeLeft(planet) {
    const lifeExpKey = "lifeExp" + planet;
    const lifeLeft = this[lifeExpKey] - this[planet];
    return lifeLeft;
    // console.log(this[planet]);
    // console.log(lifeLeft);
  }




}
