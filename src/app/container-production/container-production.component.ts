//import { FormatWidth } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-container-production',
  templateUrl: './container-production.component.html',
  styleUrls: ['./container-production.component.scss'],
  providers: [NgbCarouselConfig]
})
export class ContainerProductionComponent implements OnInit {
  currentImageIndex = 0;
  fadeIn = false;
  //mainImageLoaded = false;

  images = [
    { 
      mainImage: "../assets/img/container-production/morfi.png", 
      //overlayImage: "../assets/img/container-production/project-d-1.png",
      overlayImage: "../assets/img/container-production/morfi-mockup.png",
      title: "MORFI",
      titleStyles: {
        fontFamily: "Pattaya",
        padding: "86px 0 0 200px",
      },
        caption: "WEB APP",
        captionStyles:{
          padding:"12px 0 125px 205px",

        },
        text1: "Table reservation",
        text1Styles: {
          color: "#FFF", 
          fontSize: "20px",
          textAlign: "center",
          fontFamily: "Montserrat",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "20px",
          
        },
        text2: "Web reservation",
        text2Styles: {
          color: "#BAC0C7",
          textAlign: "center",
          fontFamily: "Montserrat",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: "300",
          lineHeight: "0px",
          padding:"12px 0",
        },
        text3: "The table reserve revolution, for web and app",
        text3Styles: {
          color: "#FFF",
          fontFamily: "Montserrat",
          fontSize: "40px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "55px",
        },
    },
    { 
      mainImage: "../assets/img/container-production/4road.png", 
      overlayImage: "../assets/img/container-production/project-d-2.png",
      title: "4 Road 4 You", 
      titleStyles: {
        fontFamily: "Bebas Neue",
        padding: "86px 0 0 100px "
      },
        caption: "WEB",
        captionStyles:{
          padding:"12px 0 125px 205px",
        },
        text1: "4 Wheels drive auto parts",
        text1Styles: {
          color: "#FFF", 
          fontSize: "20px",
          textAlign: "center",
          fontFamily: "Montserrat",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "20px",
        },
        text2: "E-comerce",
        text2Styles: {
          color: "#BAC0C7",
          textAlign: "center",
          fontFamily: "Montserrat",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: "300",
          lineHeight: "0px",
          padding:"12px 0",
        },
        text3: "Parts and accessories for your off road vehicle, drive with power",
        text3Styles: {
          color: "#FFF",
          fontFamily: "Montserrat",
          fontSize: "40px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "55px",
        },
     },
    { 
      mainImage: "../assets/img/container-production/fit.png", 
      overlayImage: "../assets/img/container-production/project-d-3.png", 
      title: "Power fit",
      titleStyles: {
        color: "#FFF",
        fontFamily: "Outfit",
        fontSize: "100px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "100px",
        padding: "86px 0 0 100px ",
      },
      caption: "WEB-APP",
      captionStyles:{
        padding:"12px 0 125px 205px",
      },
      text1: "Gym management system",
      text1Styles: {
        color: "#FFF", 
        fontSize: "20px",
        textAlign: "center",
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "20px",
      },
      text2: "Fit Managment system",
      text2Styles: {
        color: "#BAC0C7",
        textAlign: "center",
        fontFamily: "Montserrat",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "300",
        lineHeight: "0px",
        padding:"12px 0",
      },
      text3: "Control your gym, add events, manage memberships and more",
      text3Styles: {
        color: "#FFF",
        fontFamily: "Montserrat",
        fontSize: "40px",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "55px",
      },
     },
  ];

  wordOne ="Morfi";
  wordTwo ="4 Road";
  wordThree ="Power fit";


  constructor(config: NgbCarouselConfig) {
    config.interval = 6000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit() {
    this.startAnimation();
  }

  startAnimation() {
    setTimeout(() => {
      this.fadeIn = true;
      setTimeout(() => {
        this.fadeIn = false;
        this.changeImage();
      }, 6000);
    }, 500);
  }

  changeImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    this.startAnimation();
  }


  goToImage(index: number) {
    this.currentImageIndex = index;
  }

    onWordHover(index: number) {
    this.images.forEach((image, i) => {
      /* image.textStyles[i].opacity = i === index ? 1 : 0.5; */
    });
  }

  onWordLeave(index: number) {
    this.images.forEach(image => {
      /* image.textStyles[index].opacity = 0.5; */
    });
  }
}
