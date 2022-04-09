import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { WhatIsIcoComponent } from './components/what-is-ico/what-is-ico.component';
import { HomeComponent } from './components/home/home.component';
import { WorkProcessComponent } from './components/work-process/work-process.component';
import { CoreModule } from 'src/app/core/core.module';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [WhatIsIcoComponent, HomeComponent, WorkProcessComponent, ContactComponent],
  imports: [CommonModule, HomeRoutingModule,CoreModule],
  exports: [WhatIsIcoComponent, HomeComponent, WorkProcessComponent],
})
export class HomeModule {}
