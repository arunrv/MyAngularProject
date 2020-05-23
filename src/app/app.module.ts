import { NotificationUpdatedService } from './notification-updated.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from "./material/material.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeService } from './shared/employee.service';
import { environment } from '../environments/environment';
import { DepartmentService } from './shared/department.service';
import { EmployeelistComponent } from './employees/employeelist/employeelist.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatconfirmdialogueComponent } from './matconfirmdialogue/matconfirmdialogue.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeelistComponent,
    MatconfirmdialogueComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
    NgxSpinnerModule
    
    
    
  ],
  providers: [EmployeeService,DepartmentService,DatePipe, NotificationUpdatedService],
  bootstrap: [AppComponent],
  entryComponents : [EmployeeComponent, MatconfirmdialogueComponent]
})
export class AppModule { }
