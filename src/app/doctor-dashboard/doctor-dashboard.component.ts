
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.scss']
})
export class DoctorDashboardComponent implements OnInit {

  appointments = [
    { AppointmentId: 'A1', PatientName: 'Alice Johnson', Date: '2024-12-10', Time: '10:00 AM', Status: 'Scheduled' },
    { AppointmentId: 'A2', PatientName: 'Bob Smith', Date: '2024-12-10', Time: '2:00 PM', Status: 'Completed' },
    { AppointmentId: 'A3', PatientName: 'Charlie Brown', Date: '2024-12-11', Time: '9:00 AM', Status: 'Scheduled' }
  ];

  patients = [
    { PatientId: 'P1', Name: 'Alice Johnson', Age: 30, Gender: 'Female', Condition: 'Hypertension' },
    { PatientId: 'P2', Name: 'Bob Smith', Age: 40, Gender: 'Male', Condition: 'Asthma' }
  ];

  constructor() { }

  ngOnInit(): void {}

}
