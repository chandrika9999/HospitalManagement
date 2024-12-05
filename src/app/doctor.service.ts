import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private apiUrl = 'http://your-backend-url/doctors';  

  constructor(private http: HttpClient) {}

  
  registerDoctor(doctorData: any): Observable<any> {
    return this.http.post(this.apiUrl, doctorData);
  }
}
