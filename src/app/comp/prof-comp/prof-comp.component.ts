import { Etudiant } from '../../module';
import { EtdServiceService } from './../../services/etd-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prof-comp',
  templateUrl: './prof-comp.component.html',
  styleUrl: './prof-comp.component.css'
})
export class ProfCompComponent implements OnInit{
  constructor(public etdServiceService:EtdServiceService){}
 
   etudiants !:Etudiant[];
   hour!:string;
   scienceName!:string;

  ngOnInit(): void {
    this.etudiants=this.etdServiceService.getEtudiant();
    /*this.etdServiceService.getEtudiant().subscribe(Etudiant=>this.etudiants=Etudiant);*/
    console.log('the page iss good')
  }

  markAbsent(etudiants : Etudiant){
    console.log('befor is '+etudiants.isPresent)
    etudiants.isPresent=true;
    console.log('after is '+etudiants.isPresent)
    
  }

  finish(){
    console.log(this.hour);
    console.log(this.scienceName);
  }
  
  

}
