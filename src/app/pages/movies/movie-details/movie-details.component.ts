import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../../services/http.service';
import { Movie } from '../../../models/movie';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';
import { HttpMoviesService } from 'src/app/services/http-movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movieDetails: Observable<Movie>;

  constructor(
    private http: HttpService,
    private http2: HttpMoviesService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    this.movieDetails = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.http.getMovie(params.get('id')))
    );
  }

  goToMovies() {
    // this.router.navigate(['/movies']);
    this.location.back();
  }

  delete(id: string) {
    if (confirm('Are you sure?')) {
      this.http2.deleteMovie(id).subscribe();
      console.log('Movie id ' + id + ' deleted!')
      alert('Movie deleted!');
      this.location.back();
    }
  }
}
