import { Injectable } from '@angular/core';
import { Professor } from '../module';

@Injectable({
  providedIn: 'root'
})
export class ProfServiceService {

  professors: Professor[]=[];
  constructor() { 
    this.professors.push(new Professor('younes1', '1', 'professor', 'younes1', 'ouajil1', '555-123-4567', '1', 'Biology'));
    this.professors.push(new Professor('younes2', '2', 'professor', 'younes2', 'ouajil2', '333-987-6543', '2', 'Chemistry'));
    this.professors.push(new Professor('younes3', '3', 'professor', 'younes3', 'ouajil3', '777-234-5678', '3', 'Mathematics'));
    this.professors.push(new Professor('younes4', '4', 'professor', 'younes4', 'ouajil4', '444-876-5432', '4', 'Psychology'));
    this.professors.push(new Professor('younes5', '5', 'admin', 'younes5', 'ouajil5', '999-345-6789', '5', 'Sociology'));
    this.professors.push(new Professor('younes6', '6', 'admin', 'younes6', 'ouajil6', '111-222-3333', '6', 'Physics'));

  }
 
  getProf(): Professor[]{
    return this.professors;
  }

  getProfById(id:number): Professor[]{
    return [this.professors[id]];
  }

  getProfByIdone(id:number): Professor{
    return this.professors[id];
  }

  addProf(prof:Professor){
    this.professors.push(prof);
  }

  deleteProf(prof:Professor){
    this.professors.splice(this.professors.indexOf(prof), 1);
  }

  updateProf(prof:Professor){
    this.professors[this.professors.indexOf(prof)] = prof;
  }

  



}
