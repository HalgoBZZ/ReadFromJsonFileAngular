import { ProjectListComponent } from "./components/project-list-component/project-list-component.component";
import { ProjectDetailsComponent } from "./components/project-details-component/project-details-component.component";
import { ModuleWithProviders } from "@angular/compiler/src/core";
import { Routes, RouterModule } from "@angular/router";
import { NewProjComponent } from "./components/new-proj/new-proj.component";
import { HeaderComponent } from "./components/header/header.component";
import { BodyComponent } from "./components/body/body.component";
import { FooterComponent } from "./components/footer/footer.component";

const appRoutes :Routes=[
    { path: '', redirectTo: '/list', pathMatch: 'full'},
    { path: 'list', component:ProjectListComponent},
    { path: 'details', component:ProjectDetailsComponent},
    { path: 'add', component:NewProjComponent},
    { path: 'header', component:HeaderComponent},
    { path: 'body', component:BodyComponent},
    { path: 'footer', component:FooterComponent}
]
    export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);