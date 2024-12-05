import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private baseUrl = 'http://localhost:8081/doctorsEntry/all'; 
  

  constructor(private http: HttpClient) {}

  getDoctorsBySpecialization(specialization: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/doctors?specialization=${specialization}`);
  }

  bookAppointment(appointment: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/appointments`, appointment, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  getAllAppointments(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/appointments`);
  }
}
