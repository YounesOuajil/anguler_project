import { Component, OnInit } from '@angular/core';
import { Absence, Etudiant } from '../../module';
import { EtdServiceService } from '../../services/etd-service.service';
import { AbsServiceService } from '../../services/abs-service.service';

@Component({
  selector: 'app-prof-comp-abs',
  templateUrl: './prof-comp-abs.component.html',
  styleUrls: ['./prof-comp-abs.component.css'] // Corrected property name
})
export class ProfCompAbsComponent implements OnInit {
  hour!: string;
  scienceName!: string;
  etudiants!: Etudiant[];
  etudiants_abs_list: Absence[] = []; 

  constructor(public etdServiceService: EtdServiceService, public absServiceService: AbsServiceService) {}

  ngOnInit(): void {
    this.etudiants = this.etdServiceService.getEtudiant();
  }

  markpresent(etudiants: Etudiant) {
    console.log('before is ' + etudiants.isPresent);
    etudiants.isPresent = false;
    console.log('after is ' + etudiants.isPresent);
  }

  finish() {
    console.log(this.hour);
    console.log(this.scienceName);
  
    this.etudiants = this.etdServiceService.getEtudiant();
    for (let i = 0; i < this.etudiants.length; i++) {
      if (this.etudiants[i].isPresent == true) {
        const absence = new Absence(
          this.etudiants[i].id,
          this.etudiants[i].name,
          this.etudiants[i].lastname,
          this.etudiants[i].phone,
          this.etudiants[i].group,
          this.etudiants[i].fillier,
          this.hour,
          this.scienceName,
          this.etudiants[i].numberOfAbsences + 1 // Increment numberOfAbsences
        );
        this.etudiants_abs_list.push(absence);
        this.etudiants[i].numberOfAbsences = absence.numberOfAbsences; // Update in the original array
      }
    }
    this.absServiceService.addAbsences(this.etudiants_abs_list);
  }
  
}


