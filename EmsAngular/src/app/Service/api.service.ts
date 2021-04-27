import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from '../Model/employee';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = 'http://localhost:8080/';
  private EMPLOYEE = `${this.BASE_URL}\\employee`;



  constructor(private http: HttpClient) { }

  postEmployee(employee: Employee): Observable<any>{
    return this.http.post(this.EMPLOYEE, employee);
  }

  getAllEmployee(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.EMPLOYEE);
  }

  updateEmployee(employee: Employee, employeeId: number): Observable<any>{
    return this.http.put(this.EMPLOYEE + employeeId, employee);
  }
}
