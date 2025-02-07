import { IBaseModel } from "../shared/base-model";
import { AddressEntity } from "./Address.entity";
import { AmenityEntity } from "./Amenity.entity";

export class HotelEntity implements IBaseModel{
  id: number | string | undefined;
  favorite?: boolean;
  name?: string;
  description?: string;
  stars?: string;
  thumb?: string;
  amenities?: Array<AmenityEntity>;
  hasBreakFast?: boolean;
  hasRefundableRoom?: boolean;
  hasAgreement?: boolean;
  nonRefundable?: boolean | null;
  address?: AddressEntity;
  images?: string[];
  deals?: any | null;
  roomsQuantity?: number;
  price?: number;

  constructor(this_class?: HotelEntity){
    if(this_class){
      Object.assign(this, this_class)
    }
  }
}
