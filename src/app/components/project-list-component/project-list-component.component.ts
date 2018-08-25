import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project-service.service';
import { Router } from '@angular/router';
import { ProjectFilterPipe } from '../../pipes/project-filter.pipe';


@Component({
  selector: 'app-project-list-component',
  templateUrl: './project-list-component.component.html',
  styleUrls: ['./project-list-component.component.css']
})
export class ProjectListComponent implements OnInit {

  projects:Project[];
  constructor(private projectService:ProjectService, private router:Router, private projectFilter:ProjectFilterPipe) { }

  ngOnInit() {
    this.projects=new Array<Project>();
    this.getProjects();
  }

  getDetails(project){
    this.router.navigateByUrl("/details");
    this.projectService.setProject(project);
  }

  getProjects(){
    this.projectService.getProjects()
    .subscribe(data=>{
      this.projects=data;
    });
  }

  goAdd(){
    this.router.navigateByUrl("/add");
  }

}
