import { Component, OnInit } from "@angular/core"
import { faBars } from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  faBars = faBars

  ngOnInit(): void {
    this.addClass()
  }

  addClass() {
    const body = document.querySelector("body")

    if (!body) {
      return
    }

    body.style.background = "#fff"
  }
}
