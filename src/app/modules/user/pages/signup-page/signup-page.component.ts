import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  signupForm: FormGroup;

  get password() {
    return this.signupForm.get('password');
  }

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
  }


  onSubmit() {
    if (this.signupForm.valid) {
      // send obj to db
      console.log(this.signupForm.value);

      this.authService.signUp(this.signupForm.value).subscribe({
        next: (res) => {
          alert(res);
        },
        error: (err) => {
          alert(err?.error.errors['Email']);
        }
      })

      this.signupForm.reset();
      this.router.navigate(['login']);
    }
    else {
      console.log("Form is not valid");
      // throw error
    }
  }
}
