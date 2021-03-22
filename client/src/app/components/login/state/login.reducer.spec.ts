import { add_user } from './login.action';
import { loginReducer } from './login.reducer';

fdescribe('Reducer', () => {
  const initialState = { user: { username: '', password: '' }, isAuthenticated: false };

  it('should return the default state', () => {
    const action = {
      type: 'Unknown',
    };
    const state = loginReducer(initialState, action);
    expect(state).toBe(initialState);
  });


  it('should have a isAuthenticated to false', () => {
    const expected = { user: { username: 'xyz', password: 'abc' }, isAuthenticated: false };
    const action = add_user({username: 'xyz', password: 'abc'});
    const state = loginReducer(initialState, action);
    expect(state).toEqual(expected);
  });
});