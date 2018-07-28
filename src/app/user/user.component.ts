import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MyErrorStateMatcher} from '../appartement/appartement.component';
import {Appartment} from '../model/appartment';
import {User} from '../model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

/* manager */
@Component({
  selector: 'app-user',
  templateUrl: './manageuser.component.html',
  styleUrls: ['./manageuser.component.css']
})
export class ManageUserComponent implements OnInit {
  users: any;
  rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  constructor(private service: CommonService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.service.getUser().subscribe(res => {
      this.users = res;
    });
  }
}

/* manager */
@Component({
  selector: 'app-user',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateUserComponent implements OnInit {

  userForm = null;
  genders = [{
    text: 'Male',
    value: 'male'
  },
    {
      text: 'Female',
      value: 'female'
    }];
  newUser = new User();
  firstNameControl =  new FormControl('', [
    Validators.required,
  ]);
  lastNameControl = new FormControl('', [
    Validators.required,
  ]);
  genderControl = new FormControl('', [
    Validators.required,
  ]);
  emailControl = new FormControl('', [
    Validators.required, Validators.email
  ]);
  phoneControl = new FormControl('', [
    Validators.required, Validators.minLength(10), Validators.maxLength(10)
  ]);
  matcher = new MyErrorStateMatcher();
  constructor(private service: CommonService, private fb: FormBuilder, private router: Router) {}

  createForm() {
    this.userForm = new FormGroup({
      firstName: this.firstNameControl,
      lastName: this.lastNameControl,
      gender: this.genderControl,
      email: this.emailControl,
      phone: this.phoneControl
    });
  }
  ngOnInit() {
    this.createForm();
  }
  onCreateUser() {
    if (this.userForm.valid) {
      console.log(this.newUser);
    }
  }

  onBack() {
    this.router.navigate(['dashboard/user']);
  }

}
