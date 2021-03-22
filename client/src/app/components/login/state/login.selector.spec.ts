import { getUser, getUserAuthentication } from "./login.selector";


fdescribe('Login Selector', () => {
    const state = { user: { username: 'abc', password: 'xyz' }, isAuthenticated: false };
    
    it('getUser', () => {
        expect(getUser.projector(state)).toEqual(state.user);
    });

    it('getUserAuthentication', () => {
        expect(getUserAuthentication.projector(state)).toEqual(false);
    });
});