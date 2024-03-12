import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article.model';
import { ArticleService } from '../services/article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-unique',
  templateUrl: './article-unique.component.html',
  styleUrl: './article-unique.component.scss',
})
export class ArticleUniqueComponent {
  Comment!: string;
  article_!: Article;
  dispo!: boolean;

  buttonText!: string;

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.buttonText = "J'aime";
    this.Comment = '';
    const article_Id = +this.route.snapshot.params['id'];
    this.article_ = this.articleService.getArticle_ById(article_Id);
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
  getColor() {
    if (this.dispo === true) {
      return 'green';
    } else {
      return 'red';
    }
  }
}
