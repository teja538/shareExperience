import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000/api/experiences'; //url where backend sends data(apis where we get or post data)

@Injectable({
  providedIn: 'root'
})
export class ServeExperienceService {

  constructor() { }
}
