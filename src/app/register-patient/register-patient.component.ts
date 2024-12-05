import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-patient',
  templateUrl: './register-patient.component.html',
  styleUrls: ['./register-patient.component.scss']
})
export class RegisterPatientComponent {
  patient = {
    name: '',
    dob: '',
    contact: '',
    address: '',
    emergencyContact: '',
    medicalHistory: '',
    username: '',  
    password: ''   
  };

  constructor(private router: Router) {}

  onSubmit() {
  
    console.log('Patient Registered:', this.patient);
    
   
    this.router.navigate(['/patient-record']);
  }
}
