import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';
import { DashboardComponent } from './components/secure/dashboard/dashboard.component';
import { PersonasComponent } from './components/secure/personas/personas.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { tokenGuard } from './guards/token.guard';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [tokenGuard]},
  { path: 'personas', component: PersonasComponent, canActivate: [tokenGuard] },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
