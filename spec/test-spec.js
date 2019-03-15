import { User } from '../src/galactic-age';


describe ('User', function() {
  let testUser = {};

  beforeAll( function() {
    testUser = new User(30);
    testUser.lifeExpEarth = 70;
    testUser.galacticAges();
    testUser.galacticLifeExp();
    // console.log(testUser);
  });

  it ('should have a value for user\'s earth age', () => {
    expect(testUser.Earth).toEqual(30);
  });

  it ('should have an accurate value for user\'s mercury age', () => {
    expect(testUser.Mercury).toEqual(125);
  });

  it ('should have an accurate value for user\'s venus age', () => {
    expect(testUser.Venus).toEqual(48);
  });

  it ('should have an accurate value for user\'s mars age', () => {
    expect(testUser.Mars).toEqual(15);
  });

  it ('should have an accurate value for user\'s jupiter age', () => {
    expect(testUser.Jupiter).toEqual(2.5);
  });

  it ('should have an accurate value for user\'s life expectancy on mercury', () => {
    expect(testUser.lifeExpMercury).toEqual(291);
  });

  it ('should output a string describing how many years are left to live on a planet', () => {
    const lifeLeft = testUser.lifeLeftEarth();
    expect(testUser.lifeLeftEarth()).toEqual("You'll likely live on Earth for 40 more Earth years!");
  });

  it ('should output a string describing how many years are left to live on selected planet', () => {
    const lifeLeft = testUser.lifeLeft("Mercury");
    expect(lifeLeft).toEqual("You'll likely live on Mercury for 166 more Mercury years!");
  });


})
