import {PropertyAddress} from "./property-address";
import {PropertyGallery} from "./property-gallery";

export interface Project {

  projectId?: number;
  projectName?: string;
  constructYear?: string;
  totalArea?: number;
  developerName?: string;
  developerId?: string;
  projectDescription?: string
  projectHighlight?: string;
  numberSector?: number;
  numberBlk?: number;
  numberProperty?:number;
  designerName?: number;

  propertyAddress?: PropertyAddress;
  propertyGallery?: PropertyGallery[];
}
