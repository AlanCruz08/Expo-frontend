import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/secure/nav/nav.component';
import { TablaComponent } from './components/secure/tabla/tabla.component';
import { BtnCrearComponent } from './components/secure/btn-crear/btn-crear.component';
import { BtnEditarComponent } from './components/secure/btn-editar/btn-editar.component';
import { BtnEliminarComponent } from './components/secure/btn-eliminar/btn-eliminar.component';
import { DashboardComponent } from './components/secure/dashboard/dashboard.component';
import { PersonasComponent } from './components/secure/personas/personas.component';
import { SecureComponent } from './components/secure/secure.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PublicModule } from './components/public/public.module';
import { ModalComponent } from './components/modal/modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TablaComponent,
    BtnCrearComponent,
    BtnEditarComponent,
    BtnEliminarComponent,
    DashboardComponent,
    PersonasComponent,
    SecureComponent,
    NotFoundComponent,
    ModalComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    PublicModule,
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
