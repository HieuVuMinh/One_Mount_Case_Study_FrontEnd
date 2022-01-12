import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RealEstateHomeComponent} from "./real-estate-home/real-estate-home.component";
import {RealEstatePropertyComponent} from "./real-estate-property/real-estate-property.component";

const routes: Routes = [
  {
    path: "",
    component:RealEstateHomeComponent
  },
  {
    path: "property",
    component:RealEstatePropertyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule {
}
