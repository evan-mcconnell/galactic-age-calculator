

export class User {
  constructor (gender, country, smoker, activity, diet, earth, mercury, venus, mars, jupiter, lifeExpEarth){
    this.gender = gender;
    this.country = country;
    this.smoker = smoker;
    this.activity = activity;
    this.diet = diet;
    this.Earth = earth;
    this.Mercury = mercury;
    this.Venus = venus;
    this.Mars = mars;
    this.Jupiter = jupiter;
    this.lifeExpEarth = lifeExpEarth;
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

  lifeLeft(planet) {
    const lifeExpKey = "lifeExp" + planet;
    const lifeLeft = this[lifeExpKey] - this[planet];
    if (lifeLeft > 0) {
      return "You'll likely live on " + planet + " for " + lifeLeft + " more "+ planet + " years!";
    } else {
      return "You've lived " + Math.abs(lifeLeft) + " " + planet + "-years beyong your expected life span!";
    }
  }

  lifeExpectancy() {
    // gender: number(1=male,2=female,3=neither/both), country: string, smoker: string, activity: number 1-3, diet: number 1-3
    let expect = 0;
    if (this.gender === 1) {
      expect += 77;
    } else if (this.gender === 2) {
      expect += 81;
    } else {
      expect += 79;
    }
    if (this.smoker === "true") {
      expect -= 5;
    } else {
      expect += 5;
    }
    if (this.activity === 1) {
      expect -= 5
    } else if (this.activity === 3) {
      expect += 5;
    }
    if (this.diet === 1) {
      expect -= 10;
    } else if (this.diet === 3) {
      expect += 5;
    }
    return expect;
  }
}
