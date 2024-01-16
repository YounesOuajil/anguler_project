import { Etudiant } from './../module';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EtdServiceService {


  /*url: string ='http://localhost:8081/api/students/'
  getEtudiant():Observable<Etudiant[]>{
    return this.http.get<Etudiant[]>(this.url+'all');
  }*/



  etudiants:Etudiant[]=[];
  constructor() {
    this.etudiants.push(new Etudiant(0, 'student1', '1', 'student', 'Student1', 'Lastname1', '555-123-4567', false, '1', 'Biology', 0, '9:00 AM', 'Introduction to Biology'));
    this.etudiants.push(new Etudiant(1, 'student2', '2', 'student', 'Student2', 'Lastname2', '333-987-6543', false, '2', 'Chemistry', 0, '10:30 AM', 'General Chemistry'));
    this.etudiants.push(new Etudiant(2, 'student3', '3', 'student', 'Student3', 'Lastname3', '777-234-5678', false, '3', 'Mathematics', 1, '1:00 PM', 'Calculus I'));
    this.etudiants.push(new Etudiant(3, 'student4', '4', 'student', 'Student4', 'Lastname4', '444-876-5432', false, '4', 'Psychology', 20, '2:30 PM', 'Introduction to Psychology'));
    this.etudiants.push(new Etudiant(4, 'student5', '5', 'student', 'Student5', 'Lastname5', '999-345-6789', false, '5', 'Sociology', 12, '4:00 PM', 'Introduction to Sociology'));
    this.etudiants.push(new Etudiant(5, 'student6', '6', 'student', 'Student6', 'Lastname6', '111-222-3333', false, '6', 'Physics', 0, '6:30 PM', 'Physics for Beginners'));
  }
  


  getEtudiant():Etudiant[]{
    return this.etudiants;
  }

  getEtudiantbyGroup(receivedProfGroup:string):Etudiant[]{
    return this.etudiants.filter(etd=>etd.group==receivedProfGroup);
  }
  getEtudiantById(id:number):Etudiant[]{
    return [this.etudiants[id]];
  }
  getEtudiantByIdone(id:number):Etudiant{
    return this.etudiants[id];
  }

  addEtudiant(etd:Etudiant){
    this.etudiants.push(etd);
  }

  deleteEtudiant(etd:Etudiant){
    this.etudiants.splice(this.etudiants.indexOf(etd),1);
  }

  updateEtudiant(etd:Etudiant){
    this.etudiants[this.etudiants.indexOf(etd)]=etd
  }



}
