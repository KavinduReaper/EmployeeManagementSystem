import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from '../Model/employee';
import {Observable, Subject} from 'rxjs';
import { map } from 'rxjs/operators';
import {Skill} from '../Model/Skill';
import {Report} from '../Model/report';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = 'http://localhost:8082/';
  private EMPLOYEE = `${this.BASE_URL}\\employee`;
  private SKILL_URL = 'http://localhost:8083/';
  private SKILLS = `${this.SKILL_URL}\\skills`;
  private REPORT_URL = 'http://localhost:8084/';
  private REPORT = `${this.REPORT_URL}\\report`;

  constructor(private http: HttpClient) { }

  /*** Habala's functions ***/
  postEmployee(employee: Employee): Observable<any>{
    return this.http.post(this.EMPLOYEE, employee);
  }

  getAllEmployee(): Observable<Employee[]>{
    return this.http.get<Employee []>(this.EMPLOYEE);
  }

  updateEmployee(employee: Employee, employeeId: number): Observable<any>{
    return this.http.put(this.EMPLOYEE + employeeId, employee);
  }
  /*** Plaster's functions ***/
  postSkill(skill: Skill): Observable<any>{
    return this.http.post(this.SKILLS, skill);
  }

  saveOrUpdateSkill(skill: Skill, skillId: number): Observable<any>{
    return this.http.put(this.SKILLS + skillId, skill);
  }

  skillList(): Observable<Skill[]> {
    console.log(this.http.get(this.SKILLS).pipe(map(res => res as Skill[])));
    return this.http.get(this.SKILLS).pipe(map(res => res as Skill[]));
  }

  /*** Thiwa's Functions ***/
  getReport(): Observable<Report[]>{
    return this.http.get<Report[]>(this.REPORT);
  }

  /*** Baruwa's functions ***/
}
