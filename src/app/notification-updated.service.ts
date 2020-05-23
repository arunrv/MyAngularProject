import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationUpdatedService {

  constructor(private snackBar:MatSnackBar) { }

  config: MatSnackBarConfig={
    duration:3000,
    horizontalPosition: 'right',
    verticalPosition: 'top'
  }
  success(msg){
    this.config['panelClass']=['notification', 'success']
    this.snackBar.open(msg, 'Success', this.config)
  }

}
