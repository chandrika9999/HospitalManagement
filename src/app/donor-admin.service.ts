import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonorPatientService {
  private apiUrl = 'http://localhost:8081/donors/register';  

  constructor(private http: HttpClient) {}

  submitDonorNeed(donor: any): Observable<any> {
    return this.http.post(this.apiUrl, donor);
  }
}
