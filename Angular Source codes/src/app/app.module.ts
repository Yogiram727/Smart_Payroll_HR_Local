import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import{HttpClientModule}from '@angular/common/http';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { FormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { SalaryCalculationComponent } from './salary-calculation/salary-calculation.component';
import { AddSalaryComponent } from './add-salary/add-salary.component';
import { UpdateSalaryComponent } from './update-salary/update-salary.component';
import { SalaryDetailsComponent } from './salary-details/salary-details.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardComponent } from './auth-guard/auth-guard.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    // UpdateEmployeeComponent REMOVED FROM HERE
    EmployeeDetailsComponent,
    SalaryCalculationComponent,
    AddSalaryComponent,
    // UpdateSalaryComponent REMOVED FROM HERE
    SalaryDetailsComponent,
    LoginComponent,
    AuthGuardComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    HttpClientModule,
    FormsModule,
    // ADDED HERE INSTEAD:
    UpdateEmployeeComponent,
    UpdateSalaryComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
