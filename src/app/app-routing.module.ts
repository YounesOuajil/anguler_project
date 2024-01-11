import { AuthComponent } from './comp/auth/auth.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfCompAbsComponent } from './comp/prof-comp-abs/prof-comp-abs.component';
import { ProfCompComponent } from './comp/prof-comp/prof-comp.component';
import { AdminComponent } from './comp/admin/admin.component';
import { NavProfComponent } from './comp/nav-prof/nav-prof.component';

const routes: Routes = [
  
      {path: '',component: AuthComponent},
      { path: 'admin', component: AdminComponent },
      { path: 'nav-prof', component: NavProfComponent , 
      children: [
        { path: '', component: ProfCompComponent },
        { path: 'present-list', component: ProfCompComponent },
        { path: 'absent-list', component: ProfCompAbsComponent },
      
        
      ]
      
    
    }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
