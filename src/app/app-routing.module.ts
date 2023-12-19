import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerCategoriesComponent } from './container-categories/container-categories.component';
import { ContainerDescriptionComponent } from './container-description/container-description.component';
import { ContainerFaqComponent } from './container-faq/container-faq.component';
import { ContainerMeetingComponent } from './container-meeting/container-meeting.component';
import { ContainerOurProfessionalsComponent } from './container-our-professionals/container-our-professionals.component';
import { ContainerProductionComponent } from './container-production/container-production.component';
import { ContainerProjectsComponent } from './container-projects/container-projects.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderAnimationComponent } from './header-animation/header-animation.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

/* const routes: Routes = [
      {
        path: '**',
        redirectTo: '',
      },
      { path: 'container-categories', 
        component: ContainerCategoriesComponent
      },
      { path: 'container-description', 
        component: ContainerDescriptionComponent
      },
      { path: 'container-faq', 
        component: ContainerFaqComponent
      },
      { path: 'container-meeting', 
        component: ContainerMeetingComponent
      },
      { path: 'container-our-professionals', 
        component: ContainerOurProfessionalsComponent
      },
      { path: 'container-production', 
        component: ContainerProductionComponent
      },
      { path: 'container-projects', 
        component: ContainerProjectsComponent
      },
      { path: 'footer', 
        component: FooterComponent
      },
      { path: 'header-animation', 
      component: HeaderAnimationComponent
      },
      { path: 'nav-bar', 
      component: NavBarComponent
      }, 
      { path: 'nav-bar/:services', 
      component: ContainerCategoriesComponent
      },
      { path: 'nav-bar/:projects', 
      component: ContainerProjectsComponent
      },
      { path: 'nav-bar/:about', 
      component: ContainerOurProfessionalsComponent
      },
      { path: 'nav-bar/:contact', 
      component: FooterComponent
      },

]; */

@NgModule({
  /* imports: [RouterModule.forRoot(routes)], */
  exports: [RouterModule]
})
export class AppRoutingModule { }
