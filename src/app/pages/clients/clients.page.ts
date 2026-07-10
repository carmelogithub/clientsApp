import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { Clients } from 'src/app/services/clients';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    RouterLink,
  ],
})
export class ClientsPage implements OnInit {
  clients: any[] = [];

  constructor(private service: Clients) {}

  ngOnInit() {
    this.loadClients();
  }

  async ionViewWillEnter() {
    
  }

  async loadClients(){
    this.clients = await this.service.getClients();
  }

  async delete(id: number) {
    const confirmar = confirm('¿Desea eliminar este cliente?');
    if (!confirmar) {
      return;
    }
    try {
      await this.service.deleteClient(id);//id pasamos desde template
      await this.loadClients();//refrescar la lista tras la eliminación
    } catch (error) {
      console.error(error);
      alert('Error eliminando cliente');
    }
  }
} //cierra class
