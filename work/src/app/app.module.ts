import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule,ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManagementComponent } from './management/management.component';
import { ScoreManagementComponent } from './score-management/score-management.component';
import { ExitComponent } from './exit/exit.component';
import { LoginGuard } from './login.guard';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductManagementComponent } from './product-management/product-management.component'; // <---

const mgtChildrenRoutes: Routes = [
  { path: 'score-management', component:ScoreManagementComponent },
  { path: 'product-management', component:ProductManagementComponent },
  { path: 'exit', component: ExitComponent },
  { path: '', redirectTo: 'score-management', pathMatch: 'full' }
    
];

const routes:Routes = [
  {path:'home',component:HomeComponent},
  { path: '', redirectTo: 'home' ,pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  { path: 'management', 
  component: ManagementComponent,
  children:mgtChildrenRoutes ,
  canActivate:[LoginGuard]
  
}

];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ManagementComponent,
    ScoreManagementComponent,
    ExitComponent,
    ProductManagementComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule // <----
  ],
  providers: [LoginGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
