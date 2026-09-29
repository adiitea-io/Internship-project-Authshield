import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { MessageModule } from 'primeng/message';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';

import { Employee, EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-dashboard',
  imports: [
    ButtonModule,
    InputTextModule,
    RouterLink,
    RouterLinkActive,
    AvatarModule,
    TableModule,
    TagModule,
    MessageModule,
    ConfirmDialogModule
  ],
  providers: [ConfirmationService],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

  deleteMessage = '';
  employees: Employee[] = [];

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private confirmationService: ConfirmationService,
    private route: ActivatedRoute
  ) { }
  
  isUsersPage = false;

  ngOnInit(): void {
    console.log('Dashboard initialized');

    this.isUsersPage = this.route.snapshot.routeConfig?.path === 'users';

    this.employeeService.getEmployees().subscribe({
      next: (data) => {
        console.log('Employees received:', data);
        this.employees = data;
        this.cdr.detectChanges();
      },

      error: (error) => {
        console.error('Error loading employees:', error);
      }
    });
  }

  editEmployee(id: string): void {
    console.log('Editing employee:', id);

    this.router.navigate(['/employees-edit', id]);
  }

  deleteEmployee(id: string): void {

    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this employee?',
      header: 'Delete Employee',
      icon: 'pi pi-exclamation-triangle',

      accept: () => {

        this.employeeService.deleteEmployee(id).subscribe({
          next: () => {

            this.employees = this.employees.filter(
              employee => employee._id !== id
            );

            this.deleteMessage = 'Employee deleted successfully.';
          },

          error: (error) => {
            console.error('Error deleting employee:', error);
          }
        });

      }
    });
  }
}