import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationComponent } from './notification.component';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private _snackBar: MatSnackBar) { }

  openSnackBar(message: string, duration = 2000) {
    this._snackBar.openFromComponent(NotificationComponent, {
      data: {
        message: message
      },
      duration: duration,
      panelClass: 'snackbar'
    });
  }
}
