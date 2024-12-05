import { Component } from '@angular/core';
import { DoctorService } from '../doctor-availability.service';
import { Doctor } from '../doctor.model';

@Component({
  selector: 'app-doctor-availability',
  templateUrl: './doctor-availability.component.html',
  styleUrls: ['./doctor-availability.component.scss']
})
export class DoctorAvailabilityComponent {
  
  doctor: Doctor = {
    id: '', 
    name: '',
    specialization: '',
    availability: '',
    location: '',
    availableDates: [], 
    timeSlots: []       
  };

  constructor(private doctorService: DoctorService) {}

  onSubmit(): void {
    if (!this.doctor.id || !this.doctor.name || !this.doctor.specialization || !this.doctor.availability || 
        !this.doctor.location || !this.doctor.availableDates.length || !this.doctor.timeSlots.length) {
      alert('Please fill out all the fields.');
      return;
    }
  
    
    this.doctorService.registerDoctor(this.doctor).subscribe({
      next: (response) => {
        console.log('Doctor registered successfully:', response);
        alert('Doctor has been registered.');
        this.resetForm();
      },
      error: (error) => {
        console.error('Error registering doctor:', error);
        alert('Failed to register doctor.');
      }
    });
  }
  
  resetForm(): void {
    this.doctor = {
      id: '',
      name: '',
      specialization: '',
      availability: '',
      location: '',
      availableDates: [],
      timeSlots: []
    };
  }
}
