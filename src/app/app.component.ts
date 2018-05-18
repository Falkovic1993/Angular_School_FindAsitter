import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { LoginDialogComponent } from './login/login.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA,  } from '@angular/material';
import {MatSidenavModule, MatDrawer, MatDrawerContainer} from '@angular/material/sidenav';
import { DataService } from './data.service';
import { RegisterActions } from './register-baby/register-baby.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {

    this.registerActions.getUsers();
    /*
    this.dataService.getSitters().subscribe( (result: any[]) => {
      let myResult = result.filter(x => x.customerId == '1');
      console.log(result)
      console.log(myResult);
    })*/
  }

  title = 'FindaSitter';

  constructor(public authService: AuthService, public dialog: MatDialog, private dataService: DataService, private registerActions: RegisterActions) {}




}

