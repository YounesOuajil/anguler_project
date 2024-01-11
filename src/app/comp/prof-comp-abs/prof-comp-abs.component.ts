import { Component } from '@angular/core';
import { Etudiant } from '../../module';
import { EtdServiceService } from '../../services/etd-service.service';


@Component({
  selector: 'app-prof-comp-abs',
  templateUrl: './prof-comp-abs.component.html',
  styleUrl: './prof-comp-abs.component.css'
})
export class ProfCompAbsComponent {

  constructor(public etdServiceService:EtdServiceService){}
 
  etudiants !:Etudiant[];
 ngOnInit(): void {
   this.etudiants=this.etdServiceService.getEtudiant();
   /*this.etdServiceService.getEtudiant().subscribe(Etudiant=>this.etudiants=Etudiant);*/
 }

 markpresent(etudiants : Etudiant){
   console.log('befor is '+etudiants.isPresent)
   etudiants.isPresent=false;
   console.log('after is '+etudiants.isPresent)
   
 }

}
