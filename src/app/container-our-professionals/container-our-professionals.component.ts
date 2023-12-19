import { Component } from '@angular/core';

@Component({
  selector: 'app-container-our-professionals',
  templateUrl: './container-our-professionals.component.html',
  styleUrls: ['./container-our-professionals.component.scss']
})
export class ContainerOurProfessionalsComponent {

  title ="Our professionals were handpicked as";
  text1 = "the best among";
  text2= "Hunders";
  text3 ="Thousands.";
  displayText = this.text2;

  handleAnimation() {
    this.displayText = this.text3;
  }

}
