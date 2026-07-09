import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/interfaces/client.interface';
import { Clients } from 'src/app/services/clients';



@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.page.html',
  styleUrls: ['./edit-client.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class EditClientPage implements OnInit {

 id:number=0;
 client:Client={
  name:'',
  email:'',
  phone:''
 };


  constructor(private route:ActivatedRoute, private service:Clients,private router:Router) {
     
   }

  ngOnInit() {
    this.loadClient();
  }

  async loadClient(){
    this.id =Number(this.route.snapshot.paramMap.get('id'));
    this.client=await this.service.getClient(this.id);

  }//cierra load

  async save(){
    await this.service.updateClient(this.id,this.client);
    this.router.navigate(["/clients"]);

  }//cierra save

}//cierra class
