import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'projectFilter'
})
export class ProjectFilterPipe implements PipeTransform {

    transform(items: any[], value: string): any[] {

      if (!items) {
          return [];
      }
      if (!value) {
          return items;
      }
      return items.filter(it=>{   
          const project_name = it.project_name.toString().toLowerCase().includes(value.toLowerCase()) 

          const project_email = it.project_email.toString().toLowerCase().includes(value.toLowerCase()) 

          const project_tel = it.project_tel.toString().toLowerCase().includes(value.toLowerCase()) 

          const project_place = it.project_place.toString().toLowerCase().includes(value.toLowerCase()) 

          const project_typ = it.project_typ.toString().toLowerCase().includes(value.toLowerCase())

          const project_usage = it.project_usage.toString().toLowerCase().includes(value.toLowerCase())   

          const project_year = it.project_year.toString().toLowerCase().includes(value.toLowerCase()) 

          const project_main = it.project_main.toString().toLowerCase().includes(value.toLowerCase()) 

          const project_text = it.project_text.toString().toLowerCase().includes(value.toLowerCase()) 

          const project_url = it.project_url.toString().toLowerCase().includes(value.toLowerCase()) 

          return (project_name + project_email + project_main + project_place + project_tel + project_text + project_typ + project_url +project_usage + project_year);      

      }) 

  }

}
