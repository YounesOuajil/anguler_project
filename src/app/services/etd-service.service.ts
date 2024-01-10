import { Etudiant } from './../module';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EtdServiceService {
  etudiants:Etudiant[]=[];
   constructor() {
    this.etudiants.push(new Etudiant(1, 'alice_jones', 'pass123', 'student', 'Alice', 'Jones', '555-123-4567', false, 'GroupA', 'Biology'));
    this.etudiants.push(new Etudiant(2, 'bob_williams', 'secure789', 'student', 'Bob', 'Williams', '333-987-6543', false, 'GroupC', 'Chemistry'));
    this.etudiants.push(new Etudiant(3, 'carol_miller', 'hello456', 'student', 'Carol', 'Miller', '777-234-5678', false, 'GroupB', 'Mathematics'));
    this.etudiants.push(new Etudiant(4, 'david_anderson', 'world789', 'student', 'David', 'Anderson', '444-876-5432', false, 'GroupA', 'Psychology'));
    this.etudiants.push(new Etudiant(5, 'emma_smith', 'emmaPass', 'student', 'Emma', 'Smith', '999-345-6789', false, 'GroupC', 'Sociology'));
    }


  getEtudiant():Etudiant[]{
    return this.etudiants;
  }


}
