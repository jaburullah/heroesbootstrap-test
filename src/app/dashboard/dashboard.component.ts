import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MenuItems } from '../model/model';


import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  MenuItems = MenuItems;
  closeResult: string;
  _myModal: NgbModalRef;

  constructor(private modalService: NgbModal, private router: Router, private http: HttpClient) {
  }

  ngOnInit() {
  }

  open(content) {
    this._myModal = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  logout(content) {
    this._myModal.dismiss('logout action');
    this.router.navigate(['login']);
  }

  onDialogCancel() {
    this._myModal.dismiss('dialog cancel');
  }
}
