import { Component, OnInit } from '@angular/core';

import firebase from 'firebase/app';
import 'firebase/database';

interface Contact {
  id?: string;
  name: string;
  phone: string;
}

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
})
export class ContactosPage implements OnInit {
  reference: firebase.database.Reference;

  contacts: Contact[] = [];

  newContact: Contact = {
    name: '',
    phone: '',
  };

  constructor() {
    const database = firebase.database();
    this.reference = database.ref('contacts');
    this.reference.on('value', (snapshot) => {
      this.contacts = [];
      snapshot.forEach((childSnapshots) => {
        this.contacts.push(childSnapshots.val());
      });
    });
  }

  ngOnInit() {}

  addContact() {
    const theNewContac: Contact = {
      name: this.newContact.name,
      phone: this.newContact.phone,
    };

    if (this.newContact.name && this.newContact.phone) {
      this.contacts.push(theNewContac);

      this.reference.set(this.contacts);

      // this.reference.push(this.newContact);
      this.newContact = { name: '', phone: '' };
    } else {
      alert('Please enter both name and phone number.');
    }
  }
  deleteContact(contact: Contact) {
    this.contacts = this.contacts.filter((obj) => obj != contact);
    this.reference.set(this.contacts);
  }
}
