import { Component, OnInit } from '@angular/core';
import {Property} from "../../model/property";
import {PropertyService} from "../../service/property/property.service";

@Component({
  selector: 'app-real-estate-property',
  templateUrl: './real-estate-property.component.html',
  styleUrls: ['./real-estate-property.component.scss']
})
export class RealEstatePropertyComponent implements OnInit {
  properties: Property[] = [];

  constructor(private propertyService: PropertyService) { }

  ngOnInit(): void {
    this.getAllProperty();
  }

  private getAllProperty() {
    this.propertyService.getAll().subscribe(properties => {
      this.properties = properties;
    }, error => console.log(error))
  }

}
