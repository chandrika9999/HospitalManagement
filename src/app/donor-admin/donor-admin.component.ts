import { Component } from '@angular/core';
import { DonorPatientService } from '../donor-admin.service';

@Component({
  selector: 'app-donor-patient-form',
  templateUrl: './donor-admin.component.html',
  styleUrls: ['./donor-admin.component.scss']
})
export class DonorPatientFormComponent {
  donor = {
    donorType: '',
    name: '',
    contactInfo: '',
    location: '',
    description: '',
    availability: ''
  };

  constructor(private donorPatientService: DonorPatientService) {}

  onSubmit() {
    this.donorPatientService.submitDonorNeed(this.donor).subscribe(
      response => {
        console.log('Donor need submitted successfully:', response);
      },
      error => {
        console.error('Error submitting donor need:', error);
      }
    );
  }
}
