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
 
   etudiants !:Etudiant[]
  ngOnInit(): void {
    this.etudiants=this.etdServiceService.getEtudiant();
    
  }

  markAbsent(etudiants : Etudiant){
    console.log('befor is '+etudiants.isPresent)
    etudiants.isPresent=true;
    console.log('after is '+etudiants.isPresent)
    
  }
  
  

}
