import { Component, OnInit } from "@angular/core"
import { FormGroup, FormBuilder, Validators } from "@angular/forms"
import { LoginService } from "./login.service"

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup

  public existeUsuario: boolean

  public clicked = false

  public pesquisando = false

  constructor(private fb: FormBuilder, private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: this.fb.control("", Validators.required),
      senha: this.fb.control("", Validators.required),
    })
    this.loginService.buscaUsuario().subscribe(resp => {})
    this.addClass()
  }

  ngAfterViewInit() {}

  clickedToFalse() {
    this.clicked = false
  }

  onSubmit() {}

  addClass() {
    document.querySelector("body").style.background = "#ffc107"
  }
}
