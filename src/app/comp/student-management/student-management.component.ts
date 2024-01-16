import { EtdServiceService } from './../../services/etd-service.service';
import { Component } from '@angular/core';
import { Etudiant } from '../../module';
@Component({
  selector: 'app-student-management',
  templateUrl: './student-management.component.html',
  styleUrl: './student-management.component.css'
})
export class StudentManagementComponent {
  searchid!: number ;
  students!: Etudiant; 

  constructor(private studentservis: EtdServiceService) {
    
  }

  searchById(searchid: number) {
   
    this.students = this.studentservis.getEtudiantByIdone(searchid);
  }

  createEtudiant(student: Etudiant) {
    this.studentservis.addEtudiant(student);
  }

  deleteEtudiant(student: Etudiant) {
    this.studentservis.deleteEtudiant(student);
  }

  updateEtudiant(student: Etudiant) {
    this.studentservis.updateEtudiant(student);
  }

  clear() {
    this.students = new Etudiant(0, '', '', '', '', '', '', false, '', '', 0, '', '');
  }
  


}