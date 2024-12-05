import { Component } from '@angular/core';

import { DoctorsRegister } from '../doctor.model';
import { DoctorService } from '../doctor.service';
@Component({
  selector: 'app-doctorRegister-availability',
  templateUrl: './register-doctor.component.html',
  styleUrls: ['./register-doctor.component.scss']
})
export class RegisterDoctorComponent {
  // Initialize doctorRegister object with default values
  doctorRegister: DoctorsRegister= {
    username: '',
    password: '',
    name: '',
    specialization: '',
    contact: '',
    availability: '',
    timeSlots: [],
    department: ''
  };

  constructor(private doctorService: DoctorService) {}


  onSubmit(): void {
 
    // if (typeof this.doctorRegister.timeSlots === 'string') {
    //   this.doctorRegister.timeSlots = this.doctorRegister.timeSlots.split(',').map(slot => slot.trim());
    // }

    if (!this.doctorRegister.username || !this.doctorRegister.password || !this.doctorRegister.name || !this.doctorRegister.specialization ||
        !this.doctorRegister.contact || !this.doctorRegister.availability || !this.doctorRegister.timeSlots.length || !this.doctorRegister.department) {
      alert('Please fill out all the fields.');
      return;
    }

    this.doctorService.registerDoctor(this.doctorRegister).subscribe(
      response => {
        console.log('Doctor registered successfully:', response);
        alert('Doctor has been registered.');
        this.resetForm();
      },
      error => {
        console.error('Error registering doctorRegister:', error);
        alert('Failed to register doctorRegister.');
      }
    );
  }

  resetForm(): void {
    this.doctorRegister = {
      username: '',
      password: '',
      name: '',
      specialization: '',
      contact: '',
      availability: '',
      timeSlots: [],
      department: ''
    };
  }
}
