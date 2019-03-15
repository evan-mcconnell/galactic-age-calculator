import { User } from '../src/galactic-age';


describe ('User', function() {
  let testUser = {};

  beforeAll( function() {
    testUser = new User(30);
    testUser.lifeExpEarth = 70;
    testUser.galacticAges();
    testUser.galacticLifeExp();
    console.log(testUser);
  });

  it ('should have a value for user\'s earth age', () => {
    expect(testUser.earth).toEqual(30);
  });

  it ('should have an accurate value for user\'s mercury age', () => {
    expect(testUser.mercury).toEqual(125);
  });

  it ('should have an accurate value for user\'s venus age', () => {
    expect(testUser.venus).toEqual(48);
  });

  it ('should have an accurate value for user\'s mars age', () => {
    expect(testUser.mars).toEqual(15);
  });

  it ('should have an accurate value for user\'s jupiter age', () => {
    expect(testUser.jupiter).toEqual(2.5);
  });

  it ('should have an accurate value for user\'s life expectancy on mercury', () => {
    expect(testUser.lifeExpMercury).toEqual(291);
  });

  it ('should output a string describing how many years are left to live on a planet', () => {
    const lifeLeft = testUser.lifeLeftEarth();
    console.log(lifeLeft);
    expect(testUser.lifeLeftEarth()).toEqual("You'll likely live on Earth for 40 more Earth years!");
  });


})
