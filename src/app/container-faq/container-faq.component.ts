import { Component } from '@angular/core';

@Component({
  selector: 'app-container-faq',
  templateUrl: './container-faq.component.html',
  styleUrls: ['./container-faq.component.scss']
})
export class ContainerFaqComponent {

  categorie1 = "Q: What's the scoop on UXFinity's services?";
  categorie1Text = "A: Hey there! We're all about jazzing up your web and app. Whether it's a fresh site design, a cool app launch, development, or giving your brand a total glow-up, we've got your back. Plus, we're diving into the awesome world of AR too!";
  categorie2 = 'Q: How quick can you deliver?';
  categorie2Text = "A: I'm in a hurry! A: We get it, time's ticking! Our team hustles hard to get your project rolling ASAP. The timeline? Depends on what you need. Let's chat, hash out the details, and we'll give you the lowdown on how fast we can make magic happen.";
  categorie3 = "Q: Got any cool projects you've done?";
  categorie3Text = "A: Absolutely! Our portfolio's packed with some epic work. From sleek websites to apps that users can't get enough of, we've done it all. Check out our portfolio on the site for a taste of our style. To protect our clients privacy, we reserve some details."
  categorie4 = "Q: What's the deal with pricing?";
  categorie4Text = "A: No beating around the bush here – we're all about transparency. Pricing varies depending on your project's needs. Hit us up, and we'll walk you through the options to find something that suits your budget and goals.";
  categorie5 = "Q: How do I kick off my project with you guys?" ;
  categorie5Text = "A: Starting is simple! Drop us a line through our contact form, or shoot us an email. We'll set up a chat, vibe out your vision, and then take it from there. Let's make something amazing together!";
  categorie6 = "Q: What time zone are you guys in? ";
  categorie6Text = "A: Time zones? No sweat! Our team's spread out from the cool vibes of San Francisco, through the heart of Latin America, all the way to the charm of Europe. We're like global chameleons, adapting to your time zone. Whether you're an early bird or a night owl, we'll sync up with your clock. Let's make it happen, no matter where you are on the planet!";


  // Variable para rastrear el índice del elemento abierto
elementoAbierto: number | null = null;
flechaArriba: boolean[] = [false, false, false, false];

// Función para cambiar el elemento abierto
cambiarElementoAbierto(index: number): void {
  this.elementoAbierto = this.elementoAbierto === index ? null : index;
    this.flechaArriba[index - 1] = !this.flechaArriba[index - 1];
  }
}
