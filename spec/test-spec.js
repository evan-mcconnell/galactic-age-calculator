import { User } from '../src/galactic-age';


describe ('User', function() {

  const testUser = new User(30);

  it ('should have a value for user\'s earth age', () => {
    expect(testUser.earth).toEqual(30);
  });

  it ('should have an accurate value for user\'s mercury age', () => {
    testUser.mercuryAge();
    expect(testUser.mercury).toEqual(7.2);
  });

})
