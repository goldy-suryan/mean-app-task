import { ELogin } from './login.enum';
import { loginReducer } from './login.reducer';

fdescribe('Reducer', () => {
  it('should have a isAuthenticated to false', () => {
    const state = { user: {username:'', password: ''}, isAuthenticated: false };
    const action = { type: ELogin.AUTH };
    const expected = { user: {username:'', password: ''}, isAuthenticated: false };
    expect(loginReducer(state, action)).toEqual(expected);
  });
});