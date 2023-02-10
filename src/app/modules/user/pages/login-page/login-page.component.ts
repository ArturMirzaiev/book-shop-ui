import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { JwtService } from 'src/app/services/jwt.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private jwtService: JwtService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {

      this.authService.login(this.loginForm.value)
        .subscribe((res) => {
          alert("Success!");
          this.loginForm.reset();
          this.authService.storeToken(res.token);
          this.authService._isLoggedIn$.next(true);

          const decodedToken: any = this.jwtService.decodeToken(res.token)
          this.authService._isRoleAdmin$.next(decodedToken.Role);

          this.router.navigate([''])
        },
          (err: any) => {
            if (err.status === 400) {
              alert("User not found!");
              this.loginForm.reset()
            }
            else {
              alert("Something went wrong. Try again.")
            }
          })
    }

    else {
      console.log("Form is not valid");
    }
  }


}
