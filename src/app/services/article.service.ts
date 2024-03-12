import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  article: Article[] = [
    {
      id: 1,
      imageUrl:
        'https://cdn.pixabay.com/photo/2013/07/13/13/43/racing-bicycle-161449_1280.png',
      title: 'Vélo',
      prix: 80,
      description: 'Un super vélo tout terrain',
      n_like: 3,
      createdDate: new Date(),
      dispo: false,
    },

    {
      id: 2,
      imageUrl:
        'https://media.istockphoto.com/id/1364451380/photo/led-or-lcd-internet-tv-monitor.jpg?s=1024x1024&w=is&k=20&c=KGWEIp6HrCG58BxmuywEFR5fQEuvYEPLHQogiWqpKt4=',
      title: 'Téléviseur',
      prix: 230,
      description: 'Téléviseur de très bonne qualité',
      n_like: 33,
      createdDate: new Date(),
      dispo: true,
    },

    {
      id: 3,
      imageUrl:
        'https://media.istockphoto.com/id/961264596/photo/cute-child-and-teddy-bear.jpg?s=1024x1024&w=is&k=20&c=Lup7zmX3iqsja9HtomcAwnReeI-D-ZCi6bhemgIo8Tk=',
      title: 'Jouet pour enfant',
      prix: 20,
      description: 'Très rigolo pour les enfants',
      n_like: 22,
      createdDate: new Date(),
      dispo: true,
    },
    {
      id: 4,
      imageUrl:
        'https://images.pexels.com/photos/4498482/pexels-photo-4498482.jpeg',
      title: 'Montre de sport',
      prix: 45,
      description: 'On peut faire la course et la Gym avec',
      n_like: 120,
      createdDate: new Date(),
      dispo: true,
    },

    {
      id: 5,
      imageUrl:
        'https://images.pexels.com/photos/12725055/pexels-photo-12725055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Chaussures pour hommes',
      prix: 20,
      description: 'On peut aller partout avec',
      n_like: 15,
      createdDate: new Date(),
      dispo: true,
    },

    {
      id: 6,
      imageUrl:
        'https://images.pexels.com/photos/6474922/pexels-photo-6474922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Bijoux pour femmes',
      prix: 20,
      description: 'Faites-vous remarquer à distance avec',
      n_like: 55,
      createdDate: new Date(),
      dispo: true,
    },
    {
      id: 7,
      imageUrl:
        'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Ordinateur portable',
      prix: 350,
      description: 'Ordinateur de Nouvelle génération',
      n_like: 39,
      createdDate: new Date(),
      dispo: true,
    },
    {
      id: 8,
      imageUrl:
        'https://images.pexels.com/photos/336232/pexels-photo-336232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Drône hightech',
      prix: 830,
      description: 'Prenez vous images en altitude et en HD',
      n_like: 18,
      createdDate: new Date(),
      dispo: true,
    },
    {
      id: 9,
      imageUrl:
        'https://images.pexels.com/photos/243757/pexels-photo-243757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Appareil photo HD',
      prix: 475,
      description: 'Faite du cinéma étant chez vous',
      n_like: 75,
      createdDate: new Date(),
      dispo: true,
    },
  ];

  getAllArticle(): Article[] {
    return this.article;
  }

  getArticle_ById(article_Id: number): Article {
    const article_ = this.article.find(
      (article_) => article_.id === article_Id
    );

    if (!article_) {
      throw new Error('Article non trouvé');
    } else {
      return article_;
    }
  }
  snapArticle_ById(article_Id: number, art_type: "J'aime" | "Je n'aime plus") {
    const article_ = this.getArticle_ById(article_Id);
    art_type === "J'aime" ? article_.n_like++ : article_.n_like--;
  }
}
