import { Router } from '@angular/router';
import { Component } from '@angular/core';
import{Absence, Etudiant} from '../../module'
import { AbsServiceService } from '../../services/abs-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  
  constructor( public studentservis:AbsServiceService,router:Router) {}
  
  absence!:Absence[];
  searchid!:number;
  selectedStudent!: Etudiant ;

  ngOnInit(): void {
    this.absence=this.studentservis.getAbsences();
  }
  search(searchid:number){
   
    this.absence=this.studentservis.getAbsenceById(searchid);
  }
  fulllist(){
    this.absence=this.studentservis.getAbsences();
  }
  


}
