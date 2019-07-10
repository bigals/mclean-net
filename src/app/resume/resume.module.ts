import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeContainerComponent } from './resume-container/resume-container.component';


@NgModule({
  declarations: [ResumeContainerComponent],
  imports: [
    CommonModule,
    ResumeRoutingModule
  ],
})
export class ResumeModule { }
