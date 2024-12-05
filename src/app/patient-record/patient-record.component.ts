import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-record',
  templateUrl: './patient-record.component.html',
  styleUrls: ['./patient-record.component.scss']
})
export class PatientRecordComponent implements OnInit {

  patientDetails: any = {
    PatientId: 'P123',
    Name: 'Alice Johnson',
    DateOfBirth: '1980-06-15',
    ContactInfo: '123-456-7890',
    Address: '123 Main St, Springfield, IL',
    EmergencyContact: '987-654-3210',
    MedicalHistory: 'Hypertension, Asthma'
  };


  upcomingAppointments: any[] = [
    { 
      date: new Date('2024-12-05T10:30:00'), 
      doctor: 'Dr. Smith', 
      status: 'Scheduled' 
    },
    { 
      date: new Date('2024-12-12T14:00:00'), 
      doctor: 'Dr. Lee', 
      status: 'Scheduled' 
    }
  ];


  treatmentProgress: string[] = [
    'Prescribed medication for hypertension',
    'Scheduled for asthma check-up'
  ];

  constructor() { }

  ngOnInit(): void {
 
  }
}
