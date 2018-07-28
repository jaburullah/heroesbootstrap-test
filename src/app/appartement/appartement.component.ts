import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from './../common.service';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {Appartment} from '../model/appartment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-appartement',
  templateUrl: './appartement.component.html',
  styleUrls: ['./appartement.component.css']
})
export class AppartementComponent implements OnInit {
  users: any;
  rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  constructor(private service: CommonService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    // this.service.getUser().subscribe(res => {
    //   this.users = res;
    // });
  }

}
/* Manage */
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
  action: string;
}
/** Constants used to fill up our data base. */
const COLORS: string[] = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES: string[] = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
@Component({
  selector: 'app-create-appartement',
  templateUrl: './manageappartement.component.html',
  styleUrls: ['./appartement.component.css']
})
export class ManageAppartementComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'progress', 'color', 'action'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service: CommonService) {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getUsers() {
  }

  onClickEditRow(row) {
    console.log(row);
  }

}
/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
    action: 'dd'
  };
}


/* CREATE */
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-create-appartement',
  templateUrl: './createappartement.component.html',
  styleUrls: ['./createappartement.component.css']
})
export class CreateAppartementComponent implements OnInit {
  myForm = null;
  nameFormControl = new FormControl('', [
    Validators.required,
  ]);

  addressFormControl = new FormControl('', [
    Validators.required,
  ]);

  noOfFloorsFormControl = new FormControl('', [
    Validators.required,
  ]);

  managers = new FormControl();
  managersList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  matcher = new MyErrorStateMatcher();

  newAppartment = new Appartment();
  constructor(private service: CommonService, private fb: FormBuilder, private router: Router) {}

  createForm() {
    this.myForm = new FormGroup({
      name: this.nameFormControl,
      address: this.addressFormControl,
      noOfFloors: this.noOfFloorsFormControl
    });
  }
  ngOnInit() {
    this.createForm();
  }

  getUsers() {}

  onCreateAppartment() {
    console.log(this.myForm.valid);
    if (this.myForm.valid) {
      console.log(this.newAppartment);
    }
  }

  onBack() {
    this.router.navigate(['dashboard/appartement']);
  }
}
