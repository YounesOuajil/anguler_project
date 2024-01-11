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
    this.etudiants.push(new Etudiant(1, 'younes1', '1', 'professor', 'younes1', 'ouajil1', '555-123-4567', false, '1', 'Biology'));
    this.etudiants.push(new Etudiant(2, 'younes2', '2', 'professor', 'younes2', 'ouajil2', '333-987-6543', false, '2', 'Chemistry'));
    this.etudiants.push(new Etudiant(3, 'younes3', '3', 'professor', 'younes3', 'ouajil3', '777-234-5678', false, '3', 'Mathematics'));
    this.etudiants.push(new Etudiant(4, 'younes4', '4', 'professor', 'younes4', 'ouajil4', '444-876-5432', false, '4', 'Psychology'));
    this.etudiants.push(new Etudiant(5, 'younes5', '5', 'admin', 'younes5', 'ouajil5', '999-345-6789', false, '5', 'Sociology'));
}



  getEtudiant():Etudiant[]{
    return this.etudiants;
  }




}
