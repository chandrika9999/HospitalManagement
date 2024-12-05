export interface Doctor {
    id: string;  
    name: string;
    specialization: string;
    availability: string;
    location: string;
    availableDates: string[];
    timeSlots: string[];
  }
  export interface DoctorsRegister {
    username: string;
    password: string;
    name: string;
    specialization: string;
    contact: string;
    availability: string;
    timeSlots: string[]; 
    department: string;
  }
  export interface InventoryItem {
    itemId: string;
    name: string;
    category: string;
    quantity: number;
    reorderLevel: number;
  }
  export interface EmergencyAlert {
    alertId?: string;       
    patientId: string;
    alertTime: string;
    doctorAssigned?: string;
    responseTime?: string;
  }
  