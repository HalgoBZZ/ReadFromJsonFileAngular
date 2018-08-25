import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';



import { AppComponent } from './app.component';
import { ProjectListComponent } from './components/project-list-component/project-list-component.component';
import { ProjectDetailsComponent } from './components/project-details-component/project-details-component.component';
import { ProjectService } from './services/project-service.service';
import { routing } from './routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NewProjComponent } from './components/new-proj/new-proj.component';
import { BodyComponent } from './components/body/body.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectFilterPipe } from './pipes/project-filter.pipe';
import { FilterPipeModule } from './filter.pipe.module';


@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ProjectDetailsComponent,
    NewProjComponent,
    BodyComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    RouterModule,
    HttpClientModule,
    FormsModule,
    FilterPipeModule,
    ReactiveFormsModule,
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
