import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { LoginComponent } from './login.component';
import { By } from "@angular/platform-browser";
import { HttpClientModule } from '@angular/common/http';


fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let store: MockStore;
  const initialState = { isAuthenticated: false };


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ReactiveFormsModule, RouterTestingModule, HttpClientModule],
      providers: [provideMockStore({ initialState })]
    })
    .compileComponents();

    store = TestBed.inject(MockStore);
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('[User Email check] - should check user email address is invalid', () => {
    let username = component.loginForm.controls['username'];
    expect(username.valid).toBeFalsy();
    expect(username.pristine).toBeTruthy();
    expect(username.hasError('required')).toBeTruthy();
    username.setValue('abc');
    expect(username.hasError('pattern')).toBeTruthy();
  });

  it('[User Email check] - should check user correct email address entered', () => {
    let username = component.loginForm.controls['username'];
    username.setValue('goldy@gmail.com');
    expect(username.errors).toBeNull();
  })

  it('[Passwordl check] - should check password', () => {
    let password = component.loginForm.controls['password'];
    expect(password.hasError('required')).toBeTruthy();
    password.setValue('1234');
    expect(password.hasError('minlength')).toBeTruthy();
    password.setValue('123456789101112131415161718192021');
    expect(password.hasError('maxlength')).toBeTruthy();
  });

  it('[Passwordl check] - should check password is valid', () => {
    let password = component.loginForm.controls['password'];
    expect(password.hasError('required')).toBeTruthy();
    password.setValue('1234567');
    expect(password.errors).toBeNull();
    expect(password.valid).toBeTruthy();
  });

  it('[form check] should check if form is valid or not when values are not entered', () => {
    expect(component.loginForm.valid).toBeFalsy();
  })

  it('[form check] should check if form is valid or not when values entered', () => {
    component.loginForm.controls['username'].setValue('goldy@gmail.com');
    component.loginForm.controls['password'].setValue('123456');
    expect(component.loginForm.valid).toBeTruthy();
  })

  it('[form submit] should check if form is submitted', () => {
    expect(component.loginForm.invalid).toBeTruthy();
    let btn = fixture.debugElement.query(By.css('input[type=button]'));

    expect(btn.nativeElement.disabled).toBeFalsy();

    component.loginForm.controls['username'].setValue('goldy@gmail.com');
    component.loginForm.controls['password'].setValue('123456');

    // component.login();
    fixture.detectChanges();
    // TODO: form submitted do remaining stuff
  })
});
