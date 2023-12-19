import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeaderAnimationComponent } from './header-animation/header-animation.component';
import { ContainerCategoriesComponent } from './container-categories/container-categories.component';
import { ContainerProjectsComponent } from './container-projects/container-projects.component';
import { ContainerOurProfessionalsComponent } from './container-our-professionals/container-our-professionals.component';
import { ContainerDescriptionComponent } from './container-description/container-description.component';
import { ContainerFaqComponent } from './container-faq/container-faq.component';
import { ContainerMeetingComponent } from './container-meeting/container-meeting.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerProductionComponent } from './container-production/container-production.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderAnimationComponent,
    ContainerCategoriesComponent,
    ContainerProjectsComponent,
    ContainerOurProfessionalsComponent,
    ContainerDescriptionComponent,
    ContainerFaqComponent,
    ContainerMeetingComponent,
    FooterComponent,
    ContainerProductionComponent,


  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MenubarModule,
    MatMenuModule,
    MatIconModule
    //RouterModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
