import {Sector} from "./sector";
import {PropertyAddress} from "./property-address";
import {PropertyGallery} from "./property-gallery";

export interface Property {

  propertyId?: number;
  projectName?: string;
  balconyView?: string;
  propertyType?: string;
  position?: string;
  propertyDescription?: string;
  view?: string
  ownerId?: string;
  imageUrl?: string;
  totalArea?: number;
  doorDirection?:number;
  numberBalconyLiving?: number;
  numberBalconyBedroom?: number;
  numberOfBedrooms?: number;
  numberOfBathrooms?: number;
  numberBalcony?: number;
  totalPrice?: number;

  sector?: Sector;
  propertyAddress?: PropertyAddress;
  propertyGallery?: PropertyGallery[];
}
