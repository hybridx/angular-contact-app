import { Component, ViewChild, ElementRef } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-contact-app';
  @ViewChild('modalToggle') modal: ElementRef;

  contacts = [
    {
      name: 'Deepesh Nair',
      email: 'denair@gmail.com',
      phone: 9988776655,
      address: 'JDoe 1120',
      birthday: moment().format('YYYY-MM-DD'),
    },
    {
      name: 'Jayesh Nair',
      email: 'jnair@gmail.com',
      phone: 9988776655,
      address: 'JDoe 1120',
      birthday: moment().format('YYYY-MM-DD'),
    },
    {
      name: 'TVP Nair',
      email: 'tvp@gmail.com',
      phone: 9988776655,
      address: 'JDoe 1120',
      birthday: moment().format('YYYY-MM-DD'),
    },
  ];
  modalInfo: UserInfo;

  openModal(contact) {
    this.modal.nativeElement.click();
    this.modalInfo = contact;
  }
}
