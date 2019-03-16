

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
    this.Mercury = parseInt(mercury.toFixed());
    const venus = this.Earth / 0.62;
    this.Venus = parseInt(venus.toFixed());
    const mars = this.Earth / 1.88;
    this.Mars = parseInt(mars.toFixed());
    const jupiter = this.Earth / 11.86;
    this.Jupiter = parseFloat(jupiter.toFixed(2));
  }

  galacticLifeExp() {
    const mercury = this.lifeExpEarth / 0.24;
    this.lifeExpMercury = parseInt(mercury.toFixed());
    const venus = this.lifeExpEarth / 0.62;
    this.lifeExpVenus = parseInt(venus.toFixed());
    const mars = this.lifeExpEarth / 1.88;
    this.lifeExpMars = parseInt(mars.toFixed());
    const jupiter = this.lifeExpEarth / 11.86;
    this.lifeExpJupiter = parseFloat(jupiter.toFixed(2));
  }

  lifeLeft(planet) {
    const lifeLeftU = this[`lifeExp${planet}`] - this[planet];
    const lifeLeft = Math.round(lifeLeftU*100)/100;
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
