import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MovieService } from './movie.service';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  
  constructor(private movieService : MovieService , private router: Router, private route: ActivatedRoute) { }

  movieList : any[];
  showDialog : boolean;
  movieClicked : any;

  ngOnInit() {
    this.movieService.getAllMovies().subscribe( result => {
      this.movieList = result;
      console.log(this.movieList);
    });
  }


  getMovieDetail(movie : any){
    this.movieClicked = movie;
    this.showDialog = true;
  }
}
