import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManifestoHomeComponent } from './manifesto-home/manifesto-home.component';


const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: ManifestoHomeComponent,
                data: {
                    title: 'Introduction'
                }
            }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManifestoRoutingModule { }