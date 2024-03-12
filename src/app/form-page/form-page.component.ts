import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrl: './form-page.component.scss',
})
export class FormPageComponent implements OnInit {
  userTitle!: string;
  userPrix!: number;

  ngOnInit(): void {}

  onSubmitForm(form: NgForm) {
    console.log(form.value);
  }
}
