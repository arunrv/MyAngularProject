import { MatconfirmdialogueComponent } from './../matconfirmdialogue/matconfirmdialogue.component';
import { MatDialog } from '@angular/material';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogueService {

  constructor(private dialogue: MatDialog) { }

  openConfirmDialoge(msg){
    return this.dialogue.open(MatconfirmdialogueComponent, {
      width: '390px',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      position: {top: "10px"},
      data: {
        message: msg
      }
    })
  }
}
