import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddExperienceComponent } from './components/add-experience/add-experience.component';
import { ViewExperienceComponent } from './components/view-experience/view-experience.component';
import { ExperienceListComponent } from './components/experience-list/experience-list.component';
import { PlacementPrepComponent } from './components/placement-prep/placement-prep.component';

const routes: Routes = [
  {path:'',redirectTo:"expList",pathMatch:'full'},
  {path:"expList",component:ExperienceListComponent},
  {path:"expList/:id",component:ViewExperienceComponent},
  {path:"addExp",component:AddExperienceComponent},
  {path:"placementPrep",component:PlacementPrepComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
