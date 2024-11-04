import { Routes } from '@angular/router';
import { BookComponent } from './books/book/book.component';
import { AdminComponent } from './admin/admin.component';
import { AuthorComponent } from './author/author.component';

export const routes: Routes = [
  { path: 'books/:id', component: BookComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'authors', component: AuthorComponent },  
  { path: '', redirectTo: '/admin', pathMatch: 'full' }
];