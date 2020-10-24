import { Movie } from './../../models/movie';
import { HttpMoviesService } from './../../services/http-movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css'],
})
export class HttpTestComponent {
  errorMessage: string;
  constructor(private http: HttpMoviesService) { }

  get() {
    this.http.getMovies().subscribe();
  }

  post() {
    const movie: Movie = {
      title: 'Wiedzmin',
      year: '2001',
      category: 'Fantasy',
      director: 'Marek Brodzki',
      plot: 'Zabójca czegos tam',
      poster: null,
      country: 'Poland',
      imdbRating: '10.0',
    };
    this.http.postMovie(movie).subscribe();
  }

  put() {
    const movie: Movie = {
      id: '54',
      title: 'Wiedzmin 2',
      year: '2001',
      category: 'Fantasy',
      director: 'Marek Brodzki',
      plot: 'Zabójca czegos tam',
      poster: null,
      country: 'Poland',
      imdbRating: '10.0',
    };
    this.http.putMovie(movie).subscribe();
  }

  patch() {
    const movie: Partial<Movie> = {
      id: '54',
      plot: 'Gerald szuka Ciri.',
    };
    this.http.patchMovie(movie).subscribe();
  }

  delete() {
    this.http.deleteMovie('54').subscribe();
  }

  error() {
    this.http.makeError().subscribe({ error: (err: string) => (this.errorMessage = err) });
  }
}
