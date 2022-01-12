import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { RealEstateHomeComponent } from './real-estate-home/real-estate-home.component';
import { RealEstatePropertyComponent } from './real-estate-property/real-estate-property.component';
import {ShareModule} from "../share/share.module";
import { RealEstatePropertyDetailComponent } from './real-estate-property-detail/real-estate-property-detail.component';


@NgModule({
  declarations: [
    RealEstateHomeComponent,
    RealEstatePropertyComponent,
    RealEstatePropertyDetailComponent
  ],
  exports: [
    RealEstateHomeComponent
  ],
    imports: [
        CommonModule,
        ProjectRoutingModule,
        ShareModule
    ]
})
export class ProjectModule { }
