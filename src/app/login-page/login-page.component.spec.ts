import { AppComponent } from './../app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { LoginPageComponent } from './login-page.component';
import { LoginSuccessComponent } from '../login-success/login-success.component';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Location} from '@angular/common';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let fixture1: ComponentFixture<AppComponent>;
  let location: Location;
  let router: Router;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPageComponent ],
      imports: [   RouterTestingModule.withRoutes([
        { path: 'loginPage', component: LoginPageComponent },
        { path: 'loginSuccess', component: LoginSuccessComponent },
        { path: '',   redirectTo: '/loginPage', pathMatch: 'full' }, // redirect to `first-component`
      { path: '**', component: LoginPageComponent },
    ])]
    })
    .compileComponents();
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    fixture1 = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should form  should be invalid if no password provided', () => {
    fixture.detectChanges();
    const submitButton = fixture.debugElement.query(By.css('.submit-button'));
    component.loginForm.controls.userName.setValue('ComputerUser');
    submitButton.nativeElement.click();
    fixture.detectChanges();
    expect(component.loginForm.valid).toBeFalsy();

});
  it('should form  should be valid if user name and password is provided provided', () => {
  fixture.detectChanges();
  const submitButton = fixture.debugElement.query(By.css('.submit-button'));
  component.loginForm.controls.userName.setValue('ComputerUser');
  component.loginForm.controls.password.setValue('computerPassword');
  submitButton.nativeElement.click();
  fixture.detectChanges();
  expect(component.loginForm.valid).toBeTruthy();

});

  it('should form control user name  invalid if user name lenght is less than 5', () => {
  fixture.detectChanges();
  const submitButton = fixture.debugElement.query(By.css('.submit-button'));
  component.loginForm.controls.userName.setValue('Com');
  submitButton.nativeElement.click();
  fixture.detectChanges();
  expect(component.loginForm.controls.userName.valid).toBeFalsy();
});
  it('should form control user name  invalid if no password is provided', () => {
  fixture.detectChanges();
  const submitButton = fixture.debugElement.query(By.css('.submit-button'));
  component.loginForm.controls.userName.setValue('Computer');
  submitButton.nativeElement.click();
  fixture.detectChanges();
  expect(component.loginForm.controls.userName.valid).toBeTruthy();

});
  it('should form control user name  invalid if user name lenght is less than 5', () => {
  fixture.detectChanges();
  const submitButton = fixture.debugElement.query(By.css('.submit-button'));
  component.loginForm.controls.userName.setValue('Com');
  submitButton.nativeElement.click();
  fixture.detectChanges();
  expect(component.loginForm.controls.userName.valid).toBeFalsy();
});
  it('should form control password  invalid if password lenght is less than 5', () => {
  fixture.detectChanges();
  const submitButton = fixture.debugElement.query(By.css('.submit-button'));
  const password = fixture.debugElement.query(By.css('#password'));
  component.loginForm.controls.password.setValue('pwd');
  submitButton.nativeElement.click();
  fixture.detectChanges();
  expect(component.loginForm.controls.password.valid).toBeFalsy();

});
  it('should give required error if no data provide in user name', () => {
    fixture.detectChanges();
    expect(component.loginForm.controls.userName.errors?.required).toBeDefined();
  });
  it('should stay on same page if any user name or password is incorrect', fakeAsync(() => {
    router.navigate(['']);
    component.loginForm.controls.userName.setValue('Dev');
    component.loginForm.controls.password.setValue('password');
    fixture.detectChanges();
    component.onSubmit();
    tick();
    expect(location.path()).toBe('/loginPage');
  }));
  it('should route to /loginSuccess if user name and password is correct', fakeAsync(() => {
    router.navigate(['']);
    component.loginForm.controls.userName.setValue('Admin');
    component.loginForm.controls.password.setValue('password');
    fixture.detectChanges();
    component.onSubmit();
    tick();
    expect(location.path()).toBe('/loginSuccess');
  }));
  it('navigate to "" redirects you to /loginPage', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/loginPage');
  }));
});
