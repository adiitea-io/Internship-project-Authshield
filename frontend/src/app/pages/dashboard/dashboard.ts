import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
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

  editEmployee(id: string): void {
  console.log('Editing employee:', id);

  this.router.navigate(['/employees-edit', id]);
}


  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) { }

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
