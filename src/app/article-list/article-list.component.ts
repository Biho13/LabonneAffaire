import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article.model';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss',
})
export class ArticleListComponent implements OnInit {
  article!: Article[];

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.article = this.articleService.getAllArticle();
  }
}
