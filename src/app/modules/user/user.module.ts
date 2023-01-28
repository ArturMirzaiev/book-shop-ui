import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationUserComponent } from './components/navigation-user/navigation-user.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfilePageComponent } from './pages/user-profile-page/user-profile-page.component';
import { BookItemComponent } from '../user/components/book-item/book-item.component';
import { RouteBookPipe } from './pipes/route-book.pipe';
import { CategoryPanelComponent } from './components/category-panel/category-panel.component';
import { FilterBook2Pipe } from './pipes/filter-book2.pipe';
import { SortSelectPipe } from './pipes/sort-select.pipe';
import { BookPageComponent } from './pages/book-page/book-page.component';


@NgModule({
  declarations: [
    NavigationUserComponent,
    UserPageComponent,
    LoginComponent,
    SignupComponent,
    BookItemComponent,
    UserProfilePageComponent,
    CategoryPanelComponent,
    BookPageComponent,
    RouteBookPipe,
    FilterBook2Pipe,
    SortSelectPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
