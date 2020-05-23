import { DialogueService } from './../../shared/dialogue.service';
import { NotificationService } from './../../shared/notification.service';
import { EmployeeComponent } from './../employee/employee.component';
import { EmployeeService } from './../../shared/employee.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatDialogConfig, ThemePalette, ProgressSpinnerMode } from '@angular/material';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  searchKey : any;
reqArr = [];
arrlength: any;
listData: MatTableDataSource<any>;
displayedColumn: string[] = [ 'email', 'fullName', 'city', 'gender', 'isPermanent', 'actions']
isLoading: boolean;

color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 80;



//@ViewChild('MatSort') sort: MatSort

@ViewChild(MatSort) sort: MatSort

@ViewChild(MatPaginator) paginator: MatPaginator

  constructor(private service : EmployeeService, private dialogue: MatDialog, private ngxSpinner: NgxSpinnerService,
    private notificationService: NotificationService, private dialogService: DialogueService) { }

  ngOnInit() {
    this.ngxSpinner.show();
    this.isLoading=true;
    this.service.getEmployees().subscribe(response=>{
      this.reqArr=response.map(listItem=>{
        console.log(listItem);
        return {
          $key: listItem.key,
          ...listItem.payload.val()
        }
        
      })

      console.log("required aray************"+JSON.stringify(this.reqArr))
      this.listData=new MatTableDataSource(this.reqArr);
      this.listData.sort=this.sort;
      this.listData.paginator=this.paginator; 
      

      this.arrlength =this.listData.data.length;

      console.log("length**********************"+this.listData.data.length);

      this.isLoading=false;
      this.ngxSpinner.hide();

    })
  }

  onSearch() {
    this.searchKey="";
    this.onFilter();
  }
  onFilter() {
    this.listData.filter=this.searchKey.trim().toLowerCase();
  }

  onCreate(){
    
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width='60%',

    this.dialogue.open(EmployeeComponent, dialogConfig);
  }

  onEdit(row){
    console.log("******************"+JSON.stringify(row));
    console.log("****************"+row.fullName)
    this.service.populateForm(row);
    const dialogConfig=new MatDialogConfig();
    
    dialogConfig.autoFocus=true;
    dialogConfig.width='60%',

    this.dialogue.open(EmployeeComponent, dialogConfig);
  }

  onDelete(row)
  {
    /*if(confirm('Are you sure to delete?'))
    {console.log(JSON.stringify(row));
    console.log(row.$key);
    //this.service.deleteEmployee(row.$key);
    this.notificationService.warn("Deleted successfully");*/

    this.dialogService.openConfirmDialoge("Are you sure to delete the item ?").afterClosed().subscribe(response=>{
      console.log(response);
      if(response){
        this.service.deleteEmployee(row.$key);
        this.notificationService.warn("Deleted successfully")
      }
    })

  
  }
  
  }

//}
