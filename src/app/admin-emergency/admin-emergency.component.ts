import { Component, OnInit } from '@angular/core';
import { EmergencyAlertService } from '../emergency-alert.service';
import { EmergencyAlert } from '../doctor.model';

@Component({
  selector: 'app-admin-emergency',
  templateUrl: './admin-emergency.component.html',
  styleUrls: ['./admin-emergency.component.scss']
})
export class AdminEmergencyComponent implements OnInit {

  emergencyAlerts: EmergencyAlert[] = [];
  selectedAlert: EmergencyAlert | null = null;

  constructor(private emergencyAlertService: EmergencyAlertService) { }

  ngOnInit(): void {
    this.getEmergencyAlerts();
  }


  getEmergencyAlerts(): void {
    this.emergencyAlertService.getAllEmergencyAlerts().subscribe(
      (data: EmergencyAlert[]) => {
        this.emergencyAlerts = data;
      },
      (error) => {
        console.error('Error fetching emergency alerts', error);
      }
    );
  }

  openAssignDoctorForm(alert: EmergencyAlert): void {
    this.selectedAlert = { ...alert }; 
  }


  assignDoctor(): void {
    if (this.selectedAlert && this.selectedAlert.doctorAssigned) {
      this.emergencyAlertService.assignDoctorToAlert(this.selectedAlert.alertId!, this.selectedAlert.doctorAssigned!).subscribe(
        (updatedAlert: EmergencyAlert) => {
          console.log('Doctor assigned successfully', updatedAlert);
          this.getEmergencyAlerts(); 
          this.selectedAlert = null; 
        },
        (error) => {
          console.error('Error assigning doctor', error);
        }
      );
    }
  }
}
