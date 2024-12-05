import { Component, OnInit } from '@angular/core';
import { DonorPatientService } from '../donor-patient.service';
@Component({
  selector: 'donor-patient',
  templateUrl: './donor-patient.component.html',
  styleUrls: ['./donor-patient.component.scss'],
})
export class PatientViewComponent  {
  donor : any []=[]


  constructor(private donorPatientService: DonorPatientService) {}
  ngOnInit(): void {
  
    this.getDonorNeeds();
  }

  getDonorNeeds() {
    this.donorPatientService.getDonorNeeds().subscribe(
      (response) => {
        this.donor = response;  
      },
      (error) => {
        console.error('Error fetching donor needs:', error); 
      }
    );
  }
}
