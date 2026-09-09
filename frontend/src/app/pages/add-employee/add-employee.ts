import { Component } from '@angular/core';

import { RouterLink } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';

@Component({
  selector: 'app-add-employee',

  imports: [
    RouterLink,
    ButtonModule,
    InputTextModule,
    SelectModule,
    DatePickerModule
  ],

  templateUrl: './add-employee.html',
  styleUrl: './add-employee.css'
})
export class AddEmployee {

}