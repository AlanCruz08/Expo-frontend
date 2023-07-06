import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HighlightDirective } from 'src/app/directives/highlight.directive';



@NgModule({
  declarations: [
    PublicComponent,
    LoginComponent,
    RegisterComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ]
})
export class PublicModule { }
