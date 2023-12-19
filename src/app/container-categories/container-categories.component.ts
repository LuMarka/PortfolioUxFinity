import { Component } from '@angular/core';

@Component({
  selector: 'app-container-categories',
  templateUrl: './container-categories.component.html',
  styleUrls: ['./container-categories.component.scss']
})
export class ContainerCategoriesComponent {
  h2left = "We engineer amazing digital masterpieces ";
  h4left= "Crafted by top-notch experts.";
  categorie1 = "Development";
  categorie1Text = "Turning ideas into digital realities! Our development process is all about crafting smooth, responsive, and highly functional applications and websites. We focus on creating a seamless blend of complex backends and user-friendly frontends, ensuring every line of code leads to an exceptional digital experience.";
  categorie2 = "Web design";
  categorie2Text = "Creating web designs that captivate! Our approach to web design combines artistic flair with strategic thinking, ensuring each site we design is not only visually striking but also centered around the user. We're dedicated to building engaging, intuitive, and memorable websites that truly stand out.";
  categorie3 = "Branding";
  categorie3Text = "Building brand identities that speak volumes! Branding is where your story connects with the world. We dive deep into the core of your brand, creating a unique identity that truly represents you. From logos to color palettes, every element is crafted to make your brand's presence unforgettable.";
  categorie4 = "Content Creation";
  categorie4Text ="Transforming narratives into engaging experiences! Content creation for us is about weaving your story in a way that captures and engages. We produce content that's compelling, relevant, and creatively aligned with your brand’s voice, ensuring it resonates deeply with your audience.";

// Variable para rastrear el índice del elemento abierto
elementoAbierto: number | null = null;
flechaArriba: boolean[] = [false, false, false, false];

// Función para cambiar el elemento abierto
cambiarElementoAbierto(index: number): void {
  this.elementoAbierto = this.elementoAbierto === index ? null : index;
    this.flechaArriba[index - 1] = !this.flechaArriba[index - 1];
  }
}
