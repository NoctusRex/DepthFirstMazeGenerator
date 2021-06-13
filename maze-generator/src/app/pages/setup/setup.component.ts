import { Component, OnInit } from '@angular/core';
import { Form } from '../../models/form.model';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'setup',
  templateUrl: './setup.component.html',
})
export class SetupComponent implements OnInit {
  form!: Form;

  constructor(protected router: Router) {}

  ngOnInit(): void {
    this.form = new Form({
      height: new FormControl(undefined, [Validators.required]),
      width: new FormControl(undefined, [Validators.required]),
    });
  }

  onSubmit() {
    this.router.navigate(['maze'], {
      state: {
        height: this.form.get('height'),
        width: this.form.get('width'),
      },
    });
  }
}
