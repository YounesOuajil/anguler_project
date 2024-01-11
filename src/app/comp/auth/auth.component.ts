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
  

constructor(public etdServiceService : EtdServiceService,public router:Router ) {}

ngOnInit(): void {
  
this.etdServiceService.getEtudiant();
}

login() {
  console.log("Entered username:", this.username);
  console.log("Entered password:", this.password);

  for (let i = 0; i < this.etdServiceService.etudiants.length; i++) {
    console.log("Comparing with user:", this.etdServiceService.etudiants[i]);
    if (this.etdServiceService.etudiants[i].username == this.username && this.etdServiceService.etudiants[i].password == this.password) {
      console.log("Login success");
      if (this.etdServiceService.etudiants[i].role == "admin") {
        this.router.navigateByUrl('/admin');
      } else if (this.etdServiceService.etudiants[i].role == "professor") {
        this.router.navigate(['/nav-prof']);

      }
      return; // Return after successful login
    }
  }

  console.log("Invalid credentials");
  // Handle invalid credentials here, such as showing an error message.
}



}
