import { Component } from '@angular/core';


interface Doctor {
  name: string;
  specialization: string;
  availability: string;
  location: string;
  availableDates: string[];
  timeSlots: string[];
}


interface DoctorAvailability {
  name: string;
  availability: string;
  location: string;
  date: string;
  timeSlots: string[];
  selectedSlot: string | null; 
}

@Component({
  selector: 'app-appointment',
  templateUrl: './schedule-appointment.component.html',
  styleUrls: ['./schedule-appointment.component.scss']
})
export class ScheduleAppointmentComponent {

  specializations = ['Cardiology', 'Dermatology', 'Pediatrics', 'Orthopedics'];

  
  availableDoctors: Doctor[] = [];
  availableDoctorsForDate: DoctorAvailability[] = [];

  selectedSpecialization: string = '';
  appointmentDate: string = '';

  
  doctors: Doctor[] = [
    { 
      name: 'Dr. John Doe', 
      specialization: 'Cardiology', 
      availability: '9 AM - 5 PM', 
      location: 'New York Hospital', 
      availableDates: ['2024-12-05', '2024-12-06'],
      timeSlots: ['9:00 AM', '11:00 AM', '1:00 PM', '3:00 PM'] 
    },
    { 
      name: 'Dr. Jane Smith', 
      specialization: 'Dermatology', 
      availability: '10 AM - 4 PM', 
      location: 'Skin Care Clinic, LA', 
      availableDates: ['2024-12-05', '2024-12-07'],
      timeSlots: ['10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM'] 
    },
    { 
      name: 'Dr. Sara Lee', 
      specialization: 'Pediatrics', 
      availability: '8 AM - 3 PM', 
      location: 'Pediatric Care Center, Boston', 
      availableDates: ['2024-12-06', '2024-12-07'],
      timeSlots: ['8:00 AM', '10:00 AM', '12:00 PM', '2:00 PM'] 
    },
    { 
      name: 'Dr. Mark Green', 
      specialization: 'Orthopedics', 
      availability: '9 AM - 6 PM', 
      location: 'Orthopedic Clinic, Chicago', 
      availableDates: ['2024-12-06', '2024-12-08'],
      timeSlots: ['9:00 AM', '11:00 AM', '1:00 PM', '3:00 PM', '5:00 PM'] 
    }
  ];

  
  onSpecializationChange() {
    
    this.availableDoctors = this.doctors.filter(doctor => doctor.specialization === this.selectedSpecialization);
    this.availableDoctorsForDate = [];
    this.appointmentDate = '';
  }


  onDateChange() {
    
    this.availableDoctorsForDate = [];

    
    if (this.selectedSpecialization && this.appointmentDate) {
      this.availableDoctorsForDate = this.availableDoctors
        .filter(doctor => doctor.availableDates.includes(this.appointmentDate))
        .map(doctor => ({
          name: doctor.name,
          availability: doctor.availability,
          location: doctor.location,
          date: this.appointmentDate,
          timeSlots: doctor.timeSlots, 
          selectedSlot: null 
        }));
    }
  }


  bookAppointment(doctor?: DoctorAvailability) {
    if (doctor) {
      if (doctor.selectedSlot) {
        alert(`Appointment booked with ${doctor.name} at ${doctor.location} on ${doctor.date} at ${doctor.selectedSlot}`);
      } else {
        alert('Please select a time slot to book an appointment.');
      }
    } else {
      alert('Please select a doctor and date to book an appointment.');
    }
  }

  
  selectTimeSlot(doctor: DoctorAvailability, slot: string) {
    doctor.selectedSlot = slot;
  }
}
