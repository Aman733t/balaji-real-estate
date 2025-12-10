import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { AboutComponent } from './modules/about/about.component';
import { ContactUsComponent } from './modules/contact-us/contact-us.component';
import { ProjectsComponent } from './modules/projects/projects.component';
import { ProjectDetailsComponent } from './modules/project-details/project-details.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'about',
        component:AboutComponent
    },
    {
        path:'contact',
        component:ContactUsComponent
    },
    {
        path:'projects',
        component:ProjectsComponent
    },
    {
        path:'projects/details',
        component:ProjectDetailsComponent
    }
];
