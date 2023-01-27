import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindPageComponent } from './pages/find-page/find-page.component';
import { AdminNavigationComponent } from './components/admin-navigation/admin-navigation.component';
import { RouterModule } from '@angular/router';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { EditBookModalComponent } from './components/modals/edit-book-modal/edit-book-modal.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { FilterAuthorPipe } from '../user/pipes/filter-author.pipe';
import { FilterCategoryPipe } from '../user/pipes/filter-category.pipe';
import { FilterBookPipe } from '../user/pipes/filter-book.pipe';
import { WarnModalComponent } from './components/modals/warn-modal/warn-modal.component';

@NgModule({
    declarations: [
        FindPageComponent,
        AddBookComponent,
        AdminNavigationComponent,
        EditBookModalComponent,
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
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule
    ]
})
export class AdminModule { }
