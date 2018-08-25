import { NgModule } from '@angular/core';
import { ProjectFilterPipe } from "./pipes/project-filter.pipe";



@NgModule({
    declarations: [ProjectFilterPipe],
    exports: [ProjectFilterPipe],
    providers: [ProjectFilterPipe]
  
  })
  
  export class FilterPipeModule {}