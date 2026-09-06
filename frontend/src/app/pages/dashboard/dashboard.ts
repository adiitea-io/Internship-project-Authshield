import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { Employee, EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-dashboard',
  imports: [
    ButtonModule,
    InputTextModule,
    RouterLink,
    AvatarModule,
    RouterLinkActive,
    TableModule,
    TagModule
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  employees: Employee[] = [];


  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    console.log('Dashboard initialized');

    this.employeeService.getEmployees().subscribe({
      next: (data) => {
        console.log('Employees received:', data);
        this.employees = data;

      },
      error: (error) => {
        console.error('Error loading employees:', error);
      }
    });
  }


}
