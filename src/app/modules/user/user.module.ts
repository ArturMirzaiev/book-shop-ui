import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationUserComponent } from './components/navigation-user/navigation-user.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserProfilePageComponent } from './pages/user-profile-page/user-profile-page.component';
import { BookItemComponent } from '../user/components/book-item/book-item.component';
import { RouteBookPipe } from './pipes/route-book.pipe';
import { CategoryPanelComponent } from './components/category-panel/category-panel.component';
import { FilterBook2Pipe } from './pipes/filter-book2.pipe';
import { SortSelectPipe } from './pipes/sort-select.pipe';
import { BookPageComponent } from './pages/book-page/book-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { BasketModalComponent } from './modals/basket-modal/basket-modal.component';


@NgModule({
  declarations: [
    NavigationUserComponent,
    UserPageComponent,
    LoginPageComponent,
    SignupPageComponent,
    BookItemComponent,
    UserProfilePageComponent,
    CategoryPanelComponent,
    BookPageComponent,
    BasketModalComponent,
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
