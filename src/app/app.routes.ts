import { Routes } from "@angular/router";
import { HomeComponent } from "./feature/home/home.component";
import { LayoutComponent } from "./layout/layout.component";
import { FormatComponent } from "./feature/format/format.component";
import { TemplatesComponent } from "./feature/templates/templates.component";

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'format/:template_id', component: FormatComponent },
            { path: 'templates', component: TemplatesComponent }
        ]
    }
];
