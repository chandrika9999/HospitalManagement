import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmergencyAlert } from './doctor.model';

@Injectable({
  providedIn: 'root'
})
export class EmergencyAlertService {

  private apiUrl = 'http://localhost:8081/api/emergency-alerts';  
  constructor(private http: HttpClient) { }


  createEmergencyAlert(alert: EmergencyAlert): Observable<EmergencyAlert> {
    return this.http.post<EmergencyAlert>(this.apiUrl, alert);
  }


  getAllEmergencyAlerts(): Observable<EmergencyAlert[]> {
    return this.http.get<EmergencyAlert[]>(this.apiUrl);
  }

  assignDoctorToAlert(alertId: string, doctorName: string): Observable<EmergencyAlert> {
    return this.http.put<EmergencyAlert>(`${this.apiUrl}/${alertId}`, { doctorAssigned: doctorName });
  }
}
