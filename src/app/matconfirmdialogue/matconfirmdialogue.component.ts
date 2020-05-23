import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-matconfirmdialogue',
  templateUrl: './matconfirmdialogue.component.html',
  styleUrls: ['./matconfirmdialogue.component.css']
})
export class MatconfirmdialogueComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data, private matDialogRef: MatDialogRef<MatconfirmdialogueComponent>) { 
    console.log("*************"+JSON.stringify(data));
  }

  ngOnInit() {
  }

  onClosing(){
    this.matDialogRef.close();

  }

}
