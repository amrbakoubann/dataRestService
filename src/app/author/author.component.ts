import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Author } from '../books/model/book';
import { AuthorsService } from './authors.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class AuthorComponent {
  authorForm: FormGroup;
  author: Author | null = null;
  errorMessage: string = '';
  showResults: boolean = false;
  constructor(
    private fb: FormBuilder,
    private authorsService: AuthorsService
  ) {
    this.authorForm = this.fb.group({
      authorId: ['']
    });
  }
  onSubmit(): void {
    if (this.authorForm.valid) {
      const authorId = this.authorForm.value.authorId;
      this.authorsService.getAuthor(authorId).subscribe({
        next: (data: Author) => {
          this.author = data;
          this.errorMessage = '';
          this.showResults = true;
        },
        error: (_: any) => {
          this.author = null;
          this.errorMessage = 'Author not found';
          this.showResults = true;
        }
      });
    }
  }
  onReset(): void {
    this.authorForm.reset();
    this.author = null;
    this.errorMessage = '';
    this.showResults = false;
  }
}