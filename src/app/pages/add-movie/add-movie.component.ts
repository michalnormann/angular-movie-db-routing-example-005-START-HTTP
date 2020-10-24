import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  model: Partial<Movie>;

  constructor(
    private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
  }

/*
  send(movieForm: NgForm)
    console.log(movieForm);
  };
*/

  onSubmit(data) {
    this.http.post('http://localhost:3000/movies', data).subscribe((result) => {
      // @ts-ignore
      this.router.navigate(['/movie/' + result.id]);
    });
  }
}
