import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  specializations: string[] = ['Cardiology', 'Dermatology', 'Pediatrics', 'Neurology'];
  doctors: any[] = [
    { name: 'Dr. John Doe', specialization: 'Cardiology', availability: '9 AM - 12 PM' },
    { name: 'Dr. Jane Smith', specialization: 'Dermatology', availability: '1 PM - 4 PM' },
    { name: 'Dr. Peter Brown', specialization: 'Pediatrics', availability: '9 AM - 11 AM' },
    { name: 'Dr. Lucy Adams', specialization: 'Neurology', availability: '2 PM - 5 PM' },
  ];

  constructor(private router: Router) {}

  navigateToScheduleAppointment()
  {
    this.router.navigate(['/schedule-appointment'])
  }

  navigateToScheduleRecord() {
    this.router.navigate(['/patient-record']);
  }

  navigateToEmergency() {
    this.router.navigate(['/patient-emergency']);
  }

  navigateToMedical() {
    this.router.navigate(['/medical-reports']);
  }
  navigateToDonate(){
    this.router.navigate(['/donor-patient'])
  }
}
