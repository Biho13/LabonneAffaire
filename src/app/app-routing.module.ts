import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { FooterComponent } from './footer/footer.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { FormPageComponent } from './form-page/form-page.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { HeaderComponent } from './header/header.component';
import { ArticleUniqueComponent } from './article-unique/article-unique.component';

const routes: Routes = [
  { path: 'articles', component: ArticleListComponent },

  { path: 'articles/:id', component: ArticleUniqueComponent },

  { path: '', component: NewArticleComponent },

  { path: 'form', component: FormPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
