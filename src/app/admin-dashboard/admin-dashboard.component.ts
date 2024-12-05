import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {

  constructor(private router: Router) {}


  navigateToRegisterPatient()
  {
    this.router.navigate(['/register-patient']);
  }

  navigateToRegisterDoctor() {
    this.router.navigate(['/register-doctor']);
  }

  navigateToInventory() {
    this.router.navigate(['/inventory']);
  }

  navigateToPatientRecord() {
    this.router.navigate(['/patient-record']);
  }
  navigateToDoctorsAvailability()
  {
    this.router.navigate(['/doctors-availbility']);
  }
  navigateToEmergencyalert()
  {
    this.router.navigate(['/admin-emergency']);
  }
  navigateToReport()
  {
    this.router.navigate(['/report'])
  }
  navigateToDonor()
  {
    this.router.navigate(['/donor-admin'])
  }

}
