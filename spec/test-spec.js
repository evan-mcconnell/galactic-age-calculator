import { User } from '../src/galactic-age';


describe ('User', function() {
  let testUser = {};
  let lifeExpect = 0;

  beforeAll( function() {
    testUser = new User(1, "USA", "true", 2, 3, 30);
    lifeExpect = testUser.lifeExpectancy();
    testUser.lifeExpEarth = lifeExpect;
    testUser.galacticAges();
    testUser.galacticLifeExp();
    // console.log(testUser);
  });

  it ('should have a value for user\'s earth age based on birthday', () => {

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
    expect(testUser.lifeExpMercury).toEqual(320);
  });

  it ('should output a string describing how many years are left to live on selected planet', () => {
    const lifeLeft = testUser.lifeLeft("Mercury");
    expect(lifeLeft).toEqual("You'll likely live on Mercury for 195 more Mercury years!");
  });

  it ('should calculate life expectancy based on user data', () => {
    expect(lifeExpect).toEqual(77);
  });
});
