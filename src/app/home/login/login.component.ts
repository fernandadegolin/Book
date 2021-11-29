import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuario = '';
  senha = '';

  constructor() { }

  ngOnInit(): void {
  }

  login() {
    console.log('usuario', this.usuario, 'senha',this.senha);
  }
}
