import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WhatIsIcoComponent } from './components/what-is-ico/what-is-ico.component';
import { WorkProcessComponent } from './components/work-process/work-process.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'whatIsIco', component:WhatIsIcoComponent  },
  { path: 'workProcess', component: WorkProcessComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
