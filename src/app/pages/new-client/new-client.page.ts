import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { Client } from 'src/app/interfaces/client.interface';
import { Clients } from 'src/app/services/clients';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.page.html',
  styleUrls: ['./new-client.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule
    
  ],
})
export class NewClientPage implements OnInit {
  client: Client = {
    name: '',
    email: '',
    phone: '',
  };


  constructor(private service: Clients, private router:Router) {}

  ngOnInit() {}

  async save() {
    await this.service.addClient(this.client);
    this.router.navigate(['/clients']);
  }
} //cierra clase
