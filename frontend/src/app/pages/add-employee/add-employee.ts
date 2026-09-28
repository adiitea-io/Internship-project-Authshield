import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';

import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-add-employee',

  imports: [
    RouterLink,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    SelectModule,
    DatePickerModule
  ],

  templateUrl: './add-employee.html',
  styleUrl: './add-employee.css'
})



export class AddEmployee implements OnInit {
  employeeForm: FormGroup;
  employeeId: string | null = null;
  selectedFiles: File[] = [];

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.employeeForm = this.fb.group({
      employeeId: [''],
      firstName: [''],
      lastName: [''],
      email: [''],
      phone: [''],
      department: [''],
      designation: [''],
      dateOfJoining: [''],
      salary: [''],
      status: ['Active']
    });
  }

  ngOnInit(): void {
    this.employeeId = this.route.snapshot.paramMap.get('id');

    if (this.employeeId) {
      this.loadEmployee();
    }
  }

  loadEmployee(): void {
    this.employeeService.getEmployeeById(this.employeeId!).subscribe({
      next: (employee) => {
        this.employeeForm.patchValue({
          employeeId: employee.employeeId,
          firstName: employee.firstName,
          lastName: employee.lastName,
          email: employee.email,
          phone: employee.phone,
          department: employee.department,
          designation: employee.designation,
          dateOfJoining: employee.dateOfJoining,
          salary: employee.salary,
          status: employee.status
        });
      },
      error: (error) => {
        console.error('Error loading employee:', error);
      }
    });
  }

  saveEmployee(): void {
    const formData = new FormData();

    const formValue = this.employeeForm.value;

    formData.append('employeeId', formValue.employeeId);
    formData.append('firstName', formValue.firstName);
    formData.append('lastName', formValue.lastName);
    formData.append('email', formValue.email);
    formData.append('phone', formValue.phone);
    formData.append('department', formValue.department);
    formData.append('designation', formValue.designation);
    formData.append('salary', formValue.salary);
    formData.append('status', formValue.status);

    if (formValue.dateOfJoining) {
      formData.append(
        'dateOfJoining',
        new Date(formValue.dateOfJoining).toISOString()
      );
    }

    this.selectedFiles.forEach((file) => {
      formData.append('documents', file);
    });

    if (this.employeeId) {
      // EDIT
      this.employeeService.updateEmployee(
        this.employeeId,
        formData
      ).subscribe({
        next: () => {
          console.log('Employee updated successfully');
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          console.error('Error updating employee:', error);
        }
      });

    } else {
      // ADD
      this.employeeService.addEmployee(formData).subscribe({
        next: () => {
          console.log('Employee added successfully');
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          console.error('Error adding employee:', error);
        }
      });
    }
  }

  onFilesSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (!input.files) {
      return;
    }

    const files = Array.from(input.files);
    const maxSize = 5 * 1024 * 1024;

    const validFiles = files.filter((file) => {
      if (file.size > maxSize) {
        console.error(`${file.name} is larger than 5 MB.`);
        return false;
      }

      return true;
    });

    this.selectedFiles = validFiles;
  }
 

}