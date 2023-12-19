import { Component } from '@angular/core';
//import { Router } from '@angular/router';

@Component({
  selector: 'app-container-description',
  templateUrl: './container-description.component.html',
  styleUrls: ['./container-description.component.scss']
})
export class ContainerDescriptionComponent {
 title = "Innovation, Creativity, Impact: ";
 title2 = "Start Your Journey with "
 title3= "UXFinity.";
 content =" Whether it's redesigning your website or launching a new app, we're here to ensure every step you take is forward.";
 content1 ="Let's Talk";

 // Inyectar el Router en el constructor
 //constructor(private router: Router) {}

 // Función para navegar a alguna ruta
 //irAAlgunaRuta(): void {
   //this.router.navigate(['/ruta-deseada']);
// }


}
