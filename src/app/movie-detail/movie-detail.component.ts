import { Component, OnInit , Input, SimpleChanges, SimpleChange} from '@angular/core';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  @Input() movie;
  display : boolean;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.display = true;
    const currentMovie: SimpleChange = changes.movie;
    if(currentMovie.currentValue){
      this.movie = changes.movie.currentValue;
    }
  }

}
