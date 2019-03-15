

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

  // lifeLeftEarth() {
  //   const earthExp = this.lifeExpEarth - this.Earth;
  //   if (earthExp > 0) {
  //     return "You'll likely live on Earth for " + earthExp + " more Earth years!";
  //   } else {
  //     return "dead";
  //   }
  // }

  lifeLeft(planet) {
    const lifeExpKey = "lifeExp" + planet;
    const lifeLeft = this[lifeExpKey] - this[planet];
    if (lifeLeft > 0) {
      return "You'll likely live on " + planet + " for " + lifeLeft + " more "+ planet + " years!";
    } else {
      return "You've lived " + Math.abs(lifeLeft) + " " + planet + " years beyong your expected life span!";
    }
  }

  lifeExpectancy(gender, country, smoker, activity, diet) {
    // gender: number(1=male,2=female,3=neither/both), country: string, smoker: boolean, activity: number 1-3, diet: number 1-3
    let expect = 0;
    if (gender === 1) {
      expect += 76.4;
    } else if (gender === 2) {
      expect += 81.2;
    } else {
      expect += 79;
    }
    if (smoker == true) {
      expect -= 5;
    } else {
      expect += 5;
    }
    if (activity === 1) {
      expect -= 5
    } else if (activity === 3) {
      expect += 5;
    }
    if (diet === 1) {
      expect -= 10;
    } else if (diet === 3) {
      expect += 5;
    }
    return expect;
  }

}
