import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrl: './new-article.component.scss',
})
export class NewArticleComponent {
  constructor(private router: Router) {}
  onContinue() {
    this.router.navigateByUrl('articles');
  }
}
