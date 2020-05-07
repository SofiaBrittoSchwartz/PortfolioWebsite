import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'nav-bar', component: NavBarComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'resume', component: ResumeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
