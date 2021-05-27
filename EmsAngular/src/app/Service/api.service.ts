import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from '../Model/employee';
import {Observable} from 'rxjs';
import {AddSkill} from '../Model/addSkill';
import {Report} from '../Model/report';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = 'http://localhost:8082/';
  private EMPLOYEE = `${this.BASE_URL}\\employee\\`;
  private SKILL_URL = 'http://localhost:8083/';
  private SKILLS = `${this.SKILL_URL}\\skills`;
  private REPORT_URL = 'http://localhost:8084/';
  private REPORT = `${this.REPORT_URL}\\report`;
  private LOGIN_URL = 'http://localhost:8085/';
  private LOGIN = `${this.LOGIN_URL}\\validate`;


  constructor(private http: HttpClient) { }

  postEmployee(employee: Employee): Observable<any>{
    return this.http.post(this.EMPLOYEE, employee);
  }

  getAllEmployee(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.EMPLOYEE);
  }

  updateEmployee(employee: Employee): Observable<any>{
    return this.http.put(this.EMPLOYEE, employee);
  }

  deleteEmployee(id: number): Observable<any>{
    return this.http.delete(this.EMPLOYEE + id);
  }

  postSkill(addSkill: AddSkill): Observable<any>{
    return this.http.post(this.SKILLS, addSkill);
  }
  getReport(): Observable<Report[]>{
    return this.http.get<Report[]>(this.REPORT);
  }


  login(value: any, value2: any): Observable<any> {
    return this.http.get<any>(this.LOGIN);
  }
}
