import { ProfServiceService } from './../../services/prof-service.service';
import { EtdServiceService } from './../../services/etd-service.service';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit{
  isAuthenticated: boolean = true;
  username!: string;
  password!: string;
  

constructor(public etdServiceService : EtdServiceService,public router:Router ,public profServiceService:ProfServiceService) {}

ngOnInit(): void {
  
this.etdServiceService.getEtudiant();
}

login() {
  

  for (let i = 0; i < this.profServiceService.professors.length; i++) {
    console.log("Comparing with user:", this.profServiceService.professors[i]);
    if (this.profServiceService.professors[i].username == this.username && this.profServiceService.professors[i].password == this.password) {
      console.log("Login success");
      if (this.profServiceService.professors[i].role === "admin") {
        this.router.navigateByUrl('/nav-admin');
        console.log("admin");
      } else if (this.profServiceService.professors[i].role === "professor") {
        this.router.navigateByUrl('/nav-prof');
        console.log("prof");

      }
      return; // Return after successful login
    }
  }

  console.log("Invalid credentials");
  // Handle invalid credentials here, such as showing an error message.
}



}
