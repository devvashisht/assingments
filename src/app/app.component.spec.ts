import { LoginPageComponent } from './login-page/login-page.component';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [   RouterTestingModule.withRoutes([
        { path: 'loginPage', component: LoginPageComponent },
      ])]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'my-login'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('my-login');
  });

});
