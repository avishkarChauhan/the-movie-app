import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

 
  getAllMovies(): Observable<any> {
    let url="https://ghibliapi.herokuapp.com/films";
    return this.http.get(url);
  }

  
}
