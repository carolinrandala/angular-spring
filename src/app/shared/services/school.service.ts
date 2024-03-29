import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {School} from "../models/School";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  private SCHOOL_BASE_URL = 'school';

  constructor(private httpClient: HttpClient) { }

  public getAllSchools(): Observable<School[]> {
    return this.httpClient.get<School[]>(this.SCHOOL_BASE_URL);
  }

  public getSchoolById(id: number): Observable<School> {
    return this.httpClient.get<any>(this.SCHOOL_BASE_URL + '/' + id);
  }

  public deleteSchoolById(id: number): Observable<any> {
    return this.httpClient.get<any>(this.SCHOOL_BASE_URL + '/delete/' + id);
  }

  public restoreSchoolById(id: number): Observable<any> {
    return this.httpClient.get<any>(this.SCHOOL_BASE_URL + '/restore/' + id);
  }


  public updateSchoolById(id: number): Observable<any> {
    return this.httpClient.get<any>(this.SCHOOL_BASE_URL + '/update/' + id);
  }

  public updateSchool(id: number, school: School): Observable<any> {
    return this.httpClient.put<School>(this.SCHOOL_BASE_URL + '/update/' + id, school);
  }


  public createSchool(school: School): Observable<any> {
    return this.httpClient.post<any>(this.SCHOOL_BASE_URL + '/create', school);
  }

}
