import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { provideProtractorTestingSupport } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { JwtService } from 'src/app/services/jwt.service';

@Component({
  selector: 'app-navigation-user',
  templateUrl: './navigation-user.component.html',
  styleUrls: ['./navigation-user.component.css']
})
export class NavigationUserComponent implements OnInit {

  modal = false;  

  isLoggedIn = false;
  isAdmin: boolean = false;

  constructor(
    private authService: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.authService.RoleAdmin$.subscribe((res: any) => {
      res === "Admin" ?
        this.isAdmin = true :
        this.isAdmin = false
      }
    );
  }

  logout() {
    this.authService.signOut();
  }

  openCartModal(){

  }

}
