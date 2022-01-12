import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProjectModule} from "./project/project.module";
import {ShareModule} from "./share/share.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProjectModule,
    ShareModule,
    HttpClientModule //gọi API
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
