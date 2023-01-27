import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { JwtService } from 'src/app/services/jwt.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router) { }

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
          this.router.navigate([''])
        },
          (err: any) => {
            if (err.status === 400) {
              alert("User not found!");
              this.loginForm.reset()
            }
            else {  
              alert("Something is wrong. Try again.")
            }
          })
    }

    else {
      console.log("Form is not valid");
    }
  }


}
