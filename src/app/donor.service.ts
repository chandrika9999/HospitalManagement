import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonorService {

  private apiUrl = 'http://localhost:8081/donors';

  constructor(private http: HttpClient) {}


  registerDonor(donor: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, donor);
  }

 
  getAllDonors(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }


  getDonorById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
