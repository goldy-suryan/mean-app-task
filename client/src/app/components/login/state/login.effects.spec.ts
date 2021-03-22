import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';
import { LoginService } from '../../../services/login.service';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';
import * as loginActions from './login.action';
import { LoginEffect } from './login.effects';
import { ELogin } from './login.enum';
import { provideMockStore } from '@ngrx/store/testing';


fdescribe('login effect', () => {
    let actions: Observable<any>;
    let effects: LoginEffect;
    let loginService: jasmine.SpyObj<LoginService>;
    const initialState = { user: { username: '', password: '' }, isAuthenticated: false };

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            providers: [
                provideMockStore({ initialState }),
                LoginEffect,
                provideMockActions(() => actions),
                {
                    provide: LoginService,
                    useValue: {
                        login: jasmine.createSpy()
                    }
                }
            ]
        });

        effects = TestBed.get(LoginEffect);
        loginService = TestBed.get(LoginService);
    });

    describe('add User', () => {
        it('should return a stream with todo list loaded action', () => {
            const userItem = { success: true, username: 'xyz', password: 'abc', token: 'abcdefghi' }
            const action = { type: ELogin.ADD_USER };
            const outcome = { type: ELogin.SUCCESS };

            actions = hot('-a', { a: action });
            const response = cold('-a|', { a: userItem });
            loginService.login.and.returnValue(response);
            const expected = cold('--b', { b: outcome });
            expect(effects.login$).toBeObservable(expected);
        });
    });
});