import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectComponent } from './components/project/project.component';
import { ContactComponent } from './components/contact/contact.component';
import { VideoComponent } from './components/video/video.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'project', component: ProjectComponent, pathMatch: 'full'},
  {path: 'contact', component: ContactComponent, pathMatch: 'full'},
  {path: 'video', component: VideoComponent, pathMatch: 'full'},
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
