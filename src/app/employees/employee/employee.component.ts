import { NotificationUpdatedService } from './../../notification-updated.service';
import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../../shared/employee.service';
import { DepartmentService } from '../../shared/department.service';
import { NotificationService } from '../../shared/notification.service';
import { MatDialogRef } from '@angular/material';

interface Department {
  id: string;
  value: string;
}

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})


export class EmployeeComponent implements OnInit {

  constructor(private service: EmployeeService,
    private departmentService: DepartmentService,
    private notificationService: NotificationService,
    private notificationUpService: NotificationUpdatedService,
    private matDialogRef: MatDialogRef<EmployeeComponent>) { }

    departments: Department[]=[
      {id: "1", value: "Computer Science"},
      {id: "2", value: "Information Science"},
      {id: "3", value: "Polymer Science"},
      {id: "4", value: "Mechanical"},
      {id: "5", value: "Civil"}
    ]

selectedTestValue : string[] = ["1", "2"];
  ngOnInit() {
    this.service.getEmployees();
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
   
    
  }

  

  onSubmit() {
   if(this.service.form.valid){
     console.log("**************"+JSON.stringify(this.service.form.value));
     if(!this.service.form.get('$key').value)
     this.service.insertEmployee(this.service.form.value);
     else
     this.service.updateEmployee(this.service.form.value);
     this.service.form.reset();
     this.service.initializeFormGroup();
     this.notificationUpService.success("Submitted Successfully");
     this.closedialogBox();
     
   }

  }

  closedialogBox(){
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.matDialogRef.close();
    //let arjs: any=['hi', 'hello', 'bye'];
    //let arjs1 : any = new Array();

  }

}
