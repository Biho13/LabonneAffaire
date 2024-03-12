import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../models/article.model';
import { ArticleService } from '../services/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent implements OnInit {
  Comment!: string;
  @Input() article_!: Article;

  buttonText!: string;

  constructor(private articleService: ArticleService, private router: Router) {}

  ngOnInit() {
    this.buttonText = "J'aime";
    this.Comment = '';
  }
  onNLike() {
    if (this.buttonText === "J'aime") {
      this.articleService.snapArticle_ById(this.article_.id, "J'aime");
      this.buttonText = "Je n'aime plus";
    } else {
      this.articleService.snapArticle_ById(this.article_.id, "Je n'aime plus");
      this.buttonText = "J'aime";
    }
  }
  onViewArticle_() {
    this.router.navigateByUrl(`articles/${this.article_.id}`);
  }
}
