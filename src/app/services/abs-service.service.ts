import { Injectable } from '@angular/core';
import { Absence } from '../module';
@Injectable({
  providedIn: 'root'
})
export class AbsServiceService {

  absences:Absence [] = [];

  constructor() {
    this.absences.push(new Absence(6, 'John', 'Doe', '555-111-2222', 'A', 'Computer Science', '9:00 AM', 'Programming', 5));
    this.absences.push(new Absence(7, 'Jane', 'Smith', '555-333-4444', 'B', 'Electrical Engineering', '10:30 AM', 'Circuits', 30));
    this.absences.push(new Absence(8, 'Robert', 'Johnson', '555-555-6666', 'C', 'Physics', '1:00 PM', 'Quantum Mechanics', 20));
    this.absences.push(new Absence(9, 'Alice', 'Williams', '555-777-8888', 'D', 'Mathematics', '2:30 PM', 'Calculus', 15));
    this.absences.push(new Absence(10, 'Eva', 'Miller', '555-999-0000', 'E', 'Chemistry', '4:00 PM', 'Organic Chemistry', 7));
   }


  getAbsences(){
    return this.absences;
  }

  addAbsences(absences: Absence[]) {
    absences.forEach(absence => {
      absence.id = this.absences.length + 1;
      this.absences.push(absence);
    });
  }

  getAbsenceById(id:number):Absence[]{
    return [this.absences[id]];
  }

  getAbsenceByIdone(id:number):Absence{
    return this.absences[id];
  }


  


}
