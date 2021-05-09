import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from '../Model/employee';
import {Observable} from 'rxjs';
import {AddSkill} from '../Model/addSkill';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = 'http://localhost:8082/';
  private EMPLOYEE = `${this.BASE_URL}\\employee`;
  private SKILL_URL = 'http://localhost:8083/';
  private SKILLS = `${this.SKILL_URL}\\skills`;

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

  postSkill(addSkill: AddSkill): Observable<any>{
    return this.http.post(this.SKILLS, addSkill);
  }

}
