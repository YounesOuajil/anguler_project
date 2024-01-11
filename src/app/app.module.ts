import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfCompComponent } from './comp/prof-comp/prof-comp.component';
import { HttpClientModule } from '@angular/common/http';
import { NavProfComponent } from './comp/nav-prof/nav-prof.component';
import { ProfCompAbsComponent } from './comp/prof-comp-abs/prof-comp-abs.component';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './comp/auth/auth.component';
import { AdminComponent } from './comp/admin/admin.component';
@NgModule({
  declarations: [
    AppComponent,
    ProfCompComponent,
    NavProfComponent,
    ProfCompAbsComponent,
    AuthComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
