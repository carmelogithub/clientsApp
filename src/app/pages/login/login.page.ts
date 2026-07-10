import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { Auth } from 'src/app/services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';

  constructor(
    private service: Auth,
    private router: Router,
  ) {}

  ngOnInit() {}

  async comprobar() {
    try {
      const dato = await this.service.login(this.email, this.password);
      console.log(dato);
      this.router.navigate(['/clients']);
    } catch (error) {
      console.log("error en login");
      alert('Login erróneo');
    }
  }
}
