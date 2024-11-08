
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private appointments: Appointment[] = [];

  constructor() {}


  addAppointment(appointment: Appointment) {
    this.appointments.push(appointment);
  }


  getAppointments(): Appointment[] {
    return this.appointments;
  }
}

export interface Appointment {
  id: number; //
  details: string;
  time: string;
  students: string[];
}

