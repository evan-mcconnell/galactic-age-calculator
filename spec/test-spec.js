import { User } from '../src/galactic-age';


describe ('User', function() {
  let testUser = {};
  beforeAll( function() {
    testUser = new User(30);
    testUser.galacticAges();
    console.log(testUser);
  });

  it ('should have a value for user\'s earth age', () => {
    expect(testUser.earth).toEqual(30);
  });

  it ('should have an accurate value for user\'s mercury age', () => {
    expect(testUser.mercury).toEqual(7.2);
  });

  it ('should have an accurate value for user\'s venus age', () => {
    expect(testUser.venus).toEqual(18.6);
  });


})
