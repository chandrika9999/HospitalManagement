import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ScheduleAppointmentComponent } from './schedule-appointment/schedule-appointment.component';
import { LandingComponent } from './landing/landing.component'; 
import { FormsModule } from '@angular/forms'; 
import { RouterModule, Routes } from '@angular/router';  

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';

import { HttpClientModule } from '@angular/common/http';
import { PatientRecordComponent } from './patient-record/patient-record.component';

import { ReportComponent } from './report/report.component';
import { DoctorManagementComponent } from './doctor-management/doctor-management.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RegisterPatientComponent } from './register-patient/register-patient.component';


import { DonorPatientFormComponent } from './donor-admin/donor-admin.component';
import { DoctorAvailabilityComponent } from './doctor-availability/doctor-availability.component';
import { InventoryComponent } from './inventory/inventory.component';
import { PatientEmergencyComponent } from './patient-emergency/patient-emergency.component';
import { AdminEmergencyComponent } from './admin-emergency/admin-emergency.component';
import { EmergencyAlertService } from './emergency-alert.service';
import { RegisterDoctorComponent } from './register-doctor/register-doctor.component';







@NgModule({
  declarations: [
    AppComponent,
    PatientRecordComponent,
    ScheduleAppointmentComponent,
    LandingComponent,
    LoginComponent,
    ReportComponent,
    DoctorManagementComponent,
    DoctorDashboardComponent,
    AdminDashboardComponent,
    RegisterPatientComponent,
    DonorPatientFormComponent,
    DoctorAvailabilityComponent,
    InventoryComponent,
    PatientEmergencyComponent,
    RegisterDoctorComponent,
    AdminEmergencyComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  
  providers: [EmergencyAlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
