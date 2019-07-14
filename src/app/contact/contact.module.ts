import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactContainerComponent } from './contact-container/contact-container.component';
import { ContactFormComponent } from './contact-form/contact-form.component';


@NgModule({
  declarations: [ContactContainerComponent, ContactFormComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class ContactModule { }
