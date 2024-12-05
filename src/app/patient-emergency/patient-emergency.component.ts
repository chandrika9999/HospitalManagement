import { Component, OnInit } from '@angular/core';
import { EmergencyAlertService } from '../emergency-alert.service';
import { EmergencyAlert } from '../doctor.model';

@Component({
  selector: 'app-patient-emergency',
  templateUrl: './patient-emergency.component.html',
  styleUrls: ['./patient-emergency.component.scss']
})
export class PatientEmergencyComponent implements OnInit {

  emergencyAlert: EmergencyAlert = {
    patientId: '',
    alertTime: '',
    doctorAssigned: '',
    responseTime: ''
  };

  constructor(private emergencyAlertService: EmergencyAlertService) { }

  ngOnInit(): void {
    this.getPatientAlert();
  }

  getPatientAlert(): void {
   
    this.emergencyAlertService.getAllEmergencyAlerts().subscribe(
      (alerts: EmergencyAlert[]) => {
     
        const alert = alerts.find(a => a.patientId === this.emergencyAlert.patientId);
        if (alert) {
          this.emergencyAlert = alert;
        }
      },
      (error) => {
        console.error('Error fetching patient alert:', error);
      }
    );
  }

  submitAlert(): void {
    if (this.emergencyAlert.patientId && this.emergencyAlert.alertTime) {
      this.emergencyAlertService.createEmergencyAlert(this.emergencyAlert).subscribe(
        (response) => {
          console.log('SOS Alert sent successfully', response);
          alert('SOS Alert sent!');
        },
        (error) => {
          console.error('Error sending SOS alert', error);
        }
      );
    } else {
      alert('Please fill all the fields!');
    }
  }
}
