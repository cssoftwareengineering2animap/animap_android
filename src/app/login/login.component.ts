import {  Router } from '@angular/router';
import { Cadastro } from './../cadastro/cadastro.model';
import { LoginService } from './login.service';
import { AfterViewInit, Component, Directive, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';3
import * as operadores from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  public existeUsuario : boolean;
  public clicked = false;
  public pesquisando = false;

  private usuarios: Cadastro[];

  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private route: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email : this.fb.control('', Validators.required),
      senha : this.fb.control('', Validators.required)
    })
    this.loginService.buscaUsuario().subscribe(resp => this.usuarios = resp);
    this.addClass();
  }

  ngAfterViewInit() {
  }

  clickedToFalse() {
    this.clicked = false;
  }

  onSubmit() {
    this.existeUsuario = this.usuarios.some(p => p.email == this.loginForm.get('email').value 
                        && p.senha == this.loginForm.get('senha').value);
    this.clicked = true;

    if(this.existeUsuario) {
      setTimeout(() => 
        this.route.navigate(['/home']) , 1500);
    }
  }

  addClass() {
    document.querySelector('body').style.background = '#ffc107';
  }
  
}
