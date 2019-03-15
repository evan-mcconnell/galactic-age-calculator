import { User } from '../src/galactic-age';


describe ('User', function() {

  const user = new User(30);

  it ('should have a value for user.earth', () => {
    expect(user.earth).toEqual(30);
  })

})
