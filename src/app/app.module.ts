import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { FormPageComponent } from './form-page/form-page.component';
import { FormsModule } from '@angular/forms';
import * as fr from '@angular/common/locales/fr';
import { ArticleUniqueComponent } from './article-unique/article-unique.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticleListComponent,
    HeaderComponent,
    FooterComponent,
    NewArticleComponent,
    FormPageComponent,
    ArticleUniqueComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, CommonModule],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
