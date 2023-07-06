import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/secure/nav/nav.component';
import { TablaComponent } from './components/secure/tabla/tabla.component';
import { BtnCrearComponent } from './components/secure/btn-crear/btn-crear.component';
import { BtnEditarComponent } from './components/secure/btn-editar/btn-editar.component';
import { BtnEliminarComponent } from './components/secure/btn-eliminar/btn-eliminar.component';
import { DashboardComponent } from './components/secure/dashboard/dashboard.component';
import { PersonasComponent } from './components/secure/personas/personas.component';
import { AutosComponent } from './components/secure/autos/autos.component';
import { SecureComponent } from './components/secure/secure.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PublicModule } from './components/public/public.module';

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
    AutosComponent,
    SecureComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    PublicModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
