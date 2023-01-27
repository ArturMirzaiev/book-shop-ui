import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AdminNavigationComponent } from './modules/admin/components/admin-navigation/admin-navigation.component';
import { AddBookComponent } from './modules/admin/pages/add-book/add-book.component';
import { FindPageComponent } from './modules/admin/pages/find-page/find-page.component';
import { LoginComponent } from './modules/user/components/login/login.component';
import { SignupComponent } from './modules/user/components/signup/signup.component';
import { UserPageComponent } from './modules/user/pages/user-page/user-page.component';
import { UserProfilePageComponent } from './modules/user/pages/user-profile-page/user-profile-page.component';

const routesAdmin: Routes = [
  { path: 'add_book', component: AddBookComponent },
  { path: 'find_book', component: FindPageComponent },
  { path: '', redirectTo: '/admin/find_book', pathMatch: 'full' }
]

const routes: Routes = [
  { path: 'books', component: UserPageComponent },
  { path: 'books/:id', component: UserPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: UserProfilePageComponent },
  { path: '', redirectTo: '/books', pathMatch: 'full' },

  {
    path: 'admin', component: AdminNavigationComponent,
    children: routesAdmin
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
