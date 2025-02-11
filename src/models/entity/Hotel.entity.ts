import { IBaseModel } from '../shared/base-model';
import { AddressEntity } from './Address.entity';
import { AmenityEntity } from './Amenity.entity';

function Sanitize(): PropertyDecorator {
  return (target: any, propertyKey: string | symbol) => {
    let value: any = target[propertyKey]

    Object.defineProperty(target, propertyKey, {
      get: () => value,
      set: (newVal) => {
        if(newVal === null || newVal === undefined){
          value = undefined
        } else if (Array.isArray(newVal)) {
          value = newVal.filter((item) => {
            if(typeof item === 'object' && !Array.isArray(item)){
              return Object.keys(item).length > 0
            } else if (Array.isArray(item)) {
              return item.length > 0;
            }
            return true
          })
        } else {
          value = newVal
        }
      },
      enumerable: true
    })
  }
}

class HotelEntity implements IBaseModel{
  id: number | string | undefined;
  @Sanitize()
  favorite?: boolean;

  @Sanitize()
  name?: string;

  @Sanitize()
  description?: string;

  @Sanitize()
  stars?: string;

  @Sanitize()
  thumb?: string;

  @Sanitize()
  amenities?: Array<AmenityEntity>;

  @Sanitize()
  hasBreakFast?: boolean;

  @Sanitize()
  hasRefundableRoom?: boolean;

  @Sanitize()
  hasAgreement?: boolean;

  @Sanitize()
  nonRefundable?: boolean | null;

  @Sanitize()
  address?: AddressEntity;

  @Sanitize()
  images?: string[];

  @Sanitize()
  deals?: null;

  @Sanitize()
  roomsQuantity?: number;

  @Sanitize()
  price?: number;

  constructor(this_class?: HotelEntity){
    if(this_class){
      Object.assign(this, this_class)
    }
  }
}

export const Hotel = new HotelEntity()
