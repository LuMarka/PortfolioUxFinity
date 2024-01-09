import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  statusmenu = false;

  status () {
    this.statusmenu = !this.statusmenu
  }

  navTitle = "UXfinity";
  navlink1 = "Services";
  navlink2 = "Projects";
  navlink3 = "About";
  navlink4 =  "Contact";

}
