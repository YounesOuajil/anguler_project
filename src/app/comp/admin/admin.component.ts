import { Router } from '@angular/router';
import { EtdServiceService } from './../../services/etd-service.service';
import { Component } from '@angular/core';
import{Etudiant} from '../../module'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  
  constructor( public studentservis:EtdServiceService,router:Router) {}
  
  students!:Etudiant[];
  searchid!:number;
  selectedStudent!: Etudiant ;

  ngOnInit(): void {
    this.students=this.studentservis.getEtudiant();
  }
  search(searchid:number){
   
    this.students=this.studentservis.getEtudiantById(searchid);
  }
  fulllist(){
    this.students=this.studentservis.getEtudiant();
  }
  


}
