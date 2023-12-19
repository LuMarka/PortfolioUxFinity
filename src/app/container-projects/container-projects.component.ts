import { Component } from '@angular/core';

@Component({
  selector: 'app-container-projects',
  templateUrl: './container-projects.component.html',
  styleUrls: ['./container-projects.component.scss']
})
export class ContainerProjectsComponent {
  //Morfi
  imgUrl: string = '../assets/img/container-projects/morfi.png';
  morfi1 ="../assets/img/container-projects/woodenSpoon.png";
  morfi2 ="../assets/img/container-projects/mockupMorfiPc.png";
  morfi3 ="../assets/img/container-projects/mockupMorfiCell.png";
  text1Morfi ="Morfi";
  text2Morfi ="Make the process of table reservation easier";
  text3Morfi ="Web-App development . UX/UI design";

  //Mazing
  text1Mazing ="Mazing";
  text2Mazing = "Login redisign for a AR Start up";
  text3Mazing ="Web Redisign";
  imgUrlmazing = "/assets/img/container-projects/mazingCard.png";

  //Gymate
  imgUrlgymate = '../assets/img/container-projects/gymate.png';
  gymateMockupUrl = "../assets/img/container-projects/gymateMockup.png";

  //Mia
  miaUrl ='../assets/img/container-projects/mia.gif';
  text1 = "MIA Jewellery";
  text2 ="A jewellery E-commerce, with fancy design ";
  text3 ="Web design . UX Research";
  text1gymate ="Web design · Web development";
  
  //Kill Donkey
  cambiarImagen() {
    this.currentImgIndex = (this.currentImgIndex + 1) % this.imgUrlai.length;
  }
  imgUrlai: string[] = ['../assets/img/container-projects/killDonkey.png', '../assets/img/container-projects/killDonkey2.png'];
  currentImgIndex = 0;

}




