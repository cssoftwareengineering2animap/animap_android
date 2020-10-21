import { Component, OnInit } from '@angular/core';
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home-usuario',
  templateUrl: './home-usuario.component.html',
  styleUrls: ['./home-usuario.component.scss'],
  providers: [NgbCarouselConfig]
})
export class HomeUsuarioComponent implements OnInit {
  faBars = faBars;

  public dropdownToggle = false;
  public assetsUrl = "../../../../../assets/imagens/";
  ngOnInit(): void {
  }


  images = [this.assetsUrl+'passeio.jpg', this.assetsUrl+'doggg.png', this.assetsUrl+'gato.jpeg'];

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 6000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  public toggle() {
    this.dropdownToggle = !this.dropdownToggle;
  }

}
