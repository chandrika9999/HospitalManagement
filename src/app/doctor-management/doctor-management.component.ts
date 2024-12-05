import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-management',
  templateUrl: './doctor-management.component.html',
  styleUrls: ['./doctor-management.component.scss']
})
export class DoctorManagementComponent implements OnInit {

  doctors = [
    { DoctorId: 'D1', Name: 'Dr. John Smith', Specialization: 'Cardiology', ContactInfo: '123-456-7890', Availability: 'Mon-Fri 9AM-5PM', Department: 'Cardiology' },
    { DoctorId: 'D2', Name: 'Dr. Jane Doe', Specialization: 'Neurology', ContactInfo: '987-654-3210', Availability: 'Mon-Fri 10AM-4PM', Department: 'Neurology' }
  ];

  newDoctor = { DoctorId: '', Name: '', Specialization: '', ContactInfo: '', Availability: '', Department: '' };

  constructor() { }

  ngOnInit(): void {}


  addDoctor() {
    const newDoctorId = 'D' + (this.doctors.length + 1);
    const newDoctorProfile = { ...this.newDoctor, DoctorId: newDoctorId };
    this.doctors.push(newDoctorProfile);
    this.resetForm();
  }


  editDoctor(doctor: any) {
    this.newDoctor = { ...doctor };
  }


  saveDoctor() {
    const index = this.doctors.findIndex(d => d.DoctorId === this.newDoctor.DoctorId);
    if (index !== -1) {
      this.doctors[index] = { ...this.newDoctor };
    }
    this.resetForm();
  }

  
  deleteDoctor(doctorId: string) {
    this.doctors = this.doctors.filter(d => d.DoctorId !== doctorId);
  }

 
  resetForm() {
    this.newDoctor = { DoctorId: '', Name: '', Specialization: '', ContactInfo: '', Availability: '', Department: '' };
  }
  
}

  

