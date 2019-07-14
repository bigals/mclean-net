import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  public contactForm;

  constructor(private formbuilder: FormBuilder) {
    this.contactForm = formbuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
      subject: [''],
      message: ['', Validators.required],
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    // TODO: I should probably swap this out for something more legit eventually
    // tslint:disable-next-line: max-line-length
    const bodyStr = `User: ${this.contactForm.value.name}%0D%0A%0D%0AReturn Email: ${this.contactForm.value.email}%0D%0A%0D%0A${this.contactForm.value.message}`;
    window.open(`mailto:mcleannet@gmail.com?subject=${this.contactForm.value.subject}&body=${bodyStr}`);
  }

}
