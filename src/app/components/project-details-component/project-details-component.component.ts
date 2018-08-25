import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project-service.service';
import { Project } from '../../models/project';

@Component({
  selector: 'app-project-details-component',
  templateUrl: './project-details-component.component.html',
  styleUrls: ['./project-details-component.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  private project:Project;
  constructor(private projectService:ProjectService) { }

  ngOnInit() {
    this.project=this.projectService.getProject();
    console.log(this.project);
  }

}
