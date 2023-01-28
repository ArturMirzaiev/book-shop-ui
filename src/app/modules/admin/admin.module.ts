import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindPageComponent } from './pages/find-page/find-page.component';
import { AdminNavigationComponent } from './components/admin-navigation/admin-navigation.component';
import { RouterModule } from '@angular/router';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditBookModalComponent } from './components/modals/edit-book-modal/edit-book-modal.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { FilterAuthorPipe } from '../user/pipes/filter-author.pipe';
import { FilterCategoryPipe } from '../user/pipes/filter-category.pipe';
import { FilterBookPipe } from '../user/pipes/filter-book.pipe';
import { WarnModalComponent } from './components/modals/warn-modal/warn-modal.component';
import { AdmingRoutingModule } from './admin-routing.module';

@NgModule({
    declarations: [
        FindPageComponent,
        AddBookComponent,
        EditBookModalComponent,
        AdminNavigationComponent,
        BookItemComponent,
        WarnModalComponent,
        FilterAuthorPipe,
        FilterCategoryPipe,
        FilterBookPipe
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AdmingRoutingModule
    ]
})
export class AdminModule { }
