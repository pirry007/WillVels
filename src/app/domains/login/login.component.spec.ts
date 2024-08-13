import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent]
    }).compileComponents();
  });

  it('should create the login', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const login = fixture.componentInstance;
    expect(login).toBeTruthy();
  });

  it('should return invalid form', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const login = fixture.componentInstance
    fixture.detectChanges()

    const email = login.loginForm.controls['email']
    email.setValue('juanm@email.com')

    expect(login.loginForm.invalid).toBeTrue();
  });

  it('should return invalid form', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const login = fixture.componentInstance
    fixture.detectChanges()

    const password = login.loginForm.controls['password']
    password.setValue('juanmita123')

    expect(login.loginForm.invalid).toBeTrue();
  });


});
