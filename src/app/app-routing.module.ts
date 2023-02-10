import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { AdminNavigationComponent } from './modules/admin/components/admin-navigation/admin-navigation.component';
import { BookPageComponent } from './modules/user/pages/book-page/book-page.component';
import { LoginPageComponent } from './modules/user/pages/login-page/login-page.component';
import { SignupPageComponent } from './modules/user/pages/signup-page/signup-page.component';
import { UserPageComponent } from './modules/user/pages/user-page/user-page.component';
import { UserProfilePageComponent } from './modules/user/pages/user-profile-page/user-profile-page.component';

const routes: Routes = [
  { path: 'books', component: UserPageComponent },
  { path: 'books/category/:id', component: UserPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'books/book/:id', component: BookPageComponent },
  { path: 'profile', component: UserProfilePageComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/books', pathMatch: 'full' },

  {
    path: 'admin', component: AdminNavigationComponent,
    loadChildren: () => import('./modules/admin/admin.module').then(s => s.AdminModule),
    canActivate: [AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
