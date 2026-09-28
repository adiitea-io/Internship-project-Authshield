import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Employee {
  _id?: string;
  employeeId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  department: string;
  designation: string;
  dateOfJoining: string;
  salary: number;
  status: 'Active' | 'Inactive';
  documents: {
    fileName: string;
    fileSize: number;
    fileType: string;
    filePath: string;
  }[];
  createdAt?: string;
  updatedAt?: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }

getEmployeeById(id: string): Observable<Employee> {
  return this.http.get<Employee>(`${this.apiUrl}/${id}`);
  }
  
addEmployee(formData: FormData): Observable<Employee> {
  return this.http.post<Employee>(
    this.apiUrl,
    formData
  );
}

updateEmployee(id: string, formData: FormData): Observable<Employee> {
  return this.http.patch<Employee>(
    `${this.apiUrl}/${id}`,
    formData
  );
}
  
deleteEmployee(id: string): Observable<{ message: string }> {
  return this.http.delete<{ message: string }>(
    `${this.apiUrl}/${id}`
  );
}
}