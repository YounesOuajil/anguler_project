import { ProfServiceService } from './../../services/prof-service.service';
import { Etudiant } from '../../module';
import { EtdServiceService } from './../../services/etd-service.service';
import { Component, OnInit } from '@angular/core';
import { AbsServiceService } from '../../services/abs-service.service';

@Component({
  selector: 'app-prof-comp',
  templateUrl: './prof-comp.component.html',
  styleUrl: './prof-comp.component.css'
})
export class ProfCompComponent implements OnInit{
  constructor(public etdServiceService:EtdServiceService, public profServiceService:ProfServiceService,public absServiceService:AbsServiceService){}
 
   etudiants !:Etudiant[];
   

  ngOnInit(): void {
    this.profServiceService.profGroup$.subscribe(
      (group) => {
        this.etudiants=this.etdServiceService.getEtudiantbyGroup(group);
        console.log('Prof_group updated:', group);
      }
    );
  }

  markAbsent(etudiants : Etudiant){
    console.log('befor is '+etudiants.isPresent)
    etudiants.isPresent=true;
    console.log('after is '+etudiants.isPresent)
   
    
  }
 
  

}
