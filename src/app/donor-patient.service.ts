import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root',
})
export class DonorPatientService {

  private apiUrl = 'http://localhost:8081/donors'; 

  constructor(private http: HttpClient) {}

  getDonorNeeds(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/all`);
  }
}
