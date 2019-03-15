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


})
