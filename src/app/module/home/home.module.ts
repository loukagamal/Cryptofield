import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { WhatIsIcoComponent } from './components/what-is-ico/what-is-ico.component';
import { HomeComponent } from './components/home/home.component';
import { WorkProcessComponent } from './components/work-process/work-process.component';
import { CoreModule } from 'src/app/core/core.module';
import { OurtTeamComponent } from './components/ourt-team/ourt-team.component';
import { TokenComponent } from './components/token/token.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { AppsComponent } from './components/apps/apps.component';
import { PartnersComponent } from './components/partners/partners.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

@NgModule({
  declarations: [WhatIsIcoComponent, HomeComponent, WorkProcessComponent, OurtTeamComponent, TokenComponent, DocumentsComponent, AppsComponent, PartnersComponent, FaqsComponent, ContactUsComponent],
  imports: [CommonModule, HomeRoutingModule,CoreModule],
  exports: [WhatIsIcoComponent, HomeComponent, WorkProcessComponent,PartnersComponent],
})
export class HomeModule {}
