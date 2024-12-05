import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ScheduleAppointmentComponent } from './schedule-appointment/schedule-appointment.component';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { InventoryService } from './inventory.service';

import { PatientRecordComponent } from './patient-record/patient-record.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { InventoryComponent } from './inventory/inventory.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { RegisterPatientComponent } from './register-patient/register-patient.component';


import { PatientViewComponent } from './donor-patient/donor-patient.component';
import { DonorPatientFormComponent } from './donor-admin/donor-admin.component';
import { DoctorAvailabilityComponent } from './doctor-availability/doctor-availability.component';
import { AdminEmergencyComponent } from './admin-emergency/admin-emergency.component';
import { PatientEmergencyComponent } from './patient-emergency/patient-emergency.component';



const routes: Routes = [
  { path: '', component:LoginComponent},
 
  { path: 'landing', component: LandingComponent } ,
  {path:'schedule-appointment',component:ScheduleAppointmentComponent},
  {path:'patient-record',component:PatientRecordComponent},
  {path:'doctor-dashboard',component:DoctorDashboardComponent},
  {path:'admin-dashboard',component:AdminDashboardComponent},
  {path:'inventory',component:InventoryComponent},
  {path:'register-patient',component:RegisterPatientComponent},
 {path:'donor-admin',component:DonorPatientFormComponent},
  {path:'donor-patient',component:PatientViewComponent},
  {path:'doctors-availbility',component:DoctorAvailabilityComponent},
  {path:'inventory',component:InventoryComponent},
  {path:'admin-emergency',component:AdminEmergencyComponent},
  {path:'patient-emergency',component:PatientEmergencyComponent}
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
