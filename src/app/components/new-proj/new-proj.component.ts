import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { FormGroup, FormControl, Validators, Form } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-proj',
  templateUrl: './new-proj.component.html',
  styleUrls: ['./new-proj.component.css']
})
export class NewProjComponent implements OnInit {

  newProj:Project;
  projForm:FormGroup;
  name:FormControl;
  tel:FormControl;
  email:FormControl;
  place:FormControl;
  type:FormControl;
  usage:FormControl;
  year:FormControl;
  main:FormControl;
  description:FormControl;
  picture:FormControl;
  url:FormControl;
  constructor(private router:Router) { }

  ngOnInit() {
    this.newProj=new Project();
    this.name=new FormControl(this.newProj.project_name,[Validators.required]);
    this.email=new FormControl(this.newProj.project_email,[Validators.required,Validators.email]);
    this.tel=new FormControl(this.newProj.project_tel,[Validators.required,Validators.maxLength(8),Validators.minLength(8)]);
    this.place=new FormControl(this.newProj.project_place,[Validators.required]);
    this.type=new FormControl(this.newProj.project_typ,[Validators.required]);
    this.usage=new FormControl(this.newProj.project_usage,[Validators.required]);
    this.year=new FormControl(this.newProj.project_year,[Validators.required,Validators.min(2018)]);
    this.main=new FormControl(this.newProj.project_main,[Validators.required]);
    this.description=new FormControl(this.newProj.project_text,[Validators.required]);
    this.picture=new FormControl(this.newProj.project_picture,[Validators.required]);
    this.url=new FormControl(this.newProj.project_url,[Validators.required]);
    this.projForm = new FormGroup({
      name: this.name,
      email:this.email ,
      tel:this.tel,
      place:this.place,
      type:this.type,
      usage: this.usage,
      year:this.year,
      main:this.main,
      description:this.description,
      picture:this.picture,
      url:this.url
        });
  }

  onSubmit(){
    this.router.navigateByUrl("/list")
  }

}
