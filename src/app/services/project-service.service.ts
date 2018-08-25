import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Project } from '../models/project';

@Injectable()
export class ProjectService {

  private project:Project;

  constructor(private http: HttpClient) {
}

public getProjects() {
    return this.http.get<Project[]>("./../assets/IMMO_PROJECTS.JSON");
}

setProject(project){
this.project=project;
}

getProject(){
  return this.project;
}

}
