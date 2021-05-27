import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from '../Model/employee';
import {Observable} from 'rxjs';
import {Skill} from '../Model/Skill';
import {Report} from '../Model/report';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = 'http://localhost:8082/';
  private EMPLOYEE = `${this.BASE_URL}\\employee\\`;
  private SKILL_URL = 'http://localhost:8083/';
  private SKILLS = `${this.SKILL_URL}\\skills\\`;
  private REPORT_URL = 'http://localhost:8084/';
  private REPORT = `${this.REPORT_URL}\\report`;

  constructor(private http: HttpClient) { }

  /*** Employee Service ***/
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

  /*** Skill Service ***/
  postSkill(addSkill: Skill): Observable<any>{
    return this.http.post(this.SKILLS, addSkill);
  }

  getAllSkills(): Observable<Skill[]>{
    return this.http.get<Skill[]>(this.SKILLS);
  }

  deleteSkill(id: number): Observable<any>{
    return this.http.delete(this.SKILLS + 'delete\\' + id);
  }

  updateSkill(skill: Skill): Observable<any>{
    return this.http.put(this.SKILLS, skill);
  }

  /*** Report Generation Service ***/
  getReport(): Observable<Report[]>{
    return this.http.get<Report[]>(this.REPORT);
  }

  /*** Login Service ***/
}
