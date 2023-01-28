import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { FindPageComponent } from './pages/find-page/find-page.component';

const routes: Routes = [
    { path: 'add_book', component: AddBookComponent },
    { path: 'find_book', component: FindPageComponent },
    { path: '', redirectTo: '/admin/find_book', pathMatch: 'full' }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdmingRoutingModule { }
